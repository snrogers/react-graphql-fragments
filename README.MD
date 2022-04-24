# Front-End Development Examples Repo
For providing working examples of recommended practices.

# Getting Started
```
yarn && yarn serve
```
- Web server opens on `localhost:5001`
- GraphQL server opens on `localhost:4000` and has a GQL Explorer if you open it in a browser

# Guidelines
- In General, prefer Queries that
  - Fetch 1 Type over many
  - Fetch lists of associated record ID's, rather than the associated records themselves
  This may present interesting UX challenges as we find elegant ways to make Views load various sub-Components' data independently without detracting from the user experience
- Prefer Queries for `SomeItem { associatedItems: { id } }` over `SomeItem { associatedItemIds }`
  - The form on the left enables Apollo to infer the associations automatically. The Right does not.
  - The form on the left allows us to query for `SomeItem` and each of the `AssociatedItem`s individually, while still being able to perform local queries against the graph as if we had fetched the `SomeItem` and `AssociatedItems` nested together as a single query, e.g. `SomeItem { associatedItems { ...AssociatedItemFragment } }`.
- Don't be afraid to push action-oriented hooks like `useMutation` or `useIonModal` down _into_ a one-off `<DoThingButton />` component, rather than passing a callback into an `onClick` on an `IonButton`

# TODO: Talk to Cory
## Query Component Design
Breaking down queries into very small units presents an interesting challenge, especially in the context of TN-Pos.
If data is loaded separately in separate Components on screen, we need to be able to have a UI that makes sense, even if not all of it is displayed yet.
It is impossible for us to predict the load order that of our Components, so we need to make sure that Components don't pop in and out of existence and push eachother around.

### View States
Typically All ViewStates for a given Component should fill the same on-screen footprint.

- *ErrorViewState*
  - Indicates that an error has occurred
  - May include a `<Button />` to attempt a refetch? TODO: Cory
- *NotFoundViewState*
  - Indicates that the requested resource was not found and that's surprising!
  - Indicates that an error has occurred in the system (as opposed to EmptyViewState)
- *EmptyViewState*
  - Indicates that the requested resource was not found and that's fine.
  - DOES NOT Indicate that an error has occurred
- LoadingViewState
  - Indicates that the resource has been requested, but not yet arrived
  - DOES NOT Indicate that an error has occurred
  - Likely to include some IonSkeleton/IonSpinner business to indicate what the component _will_ be when rendered? TODO: Cory

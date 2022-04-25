import React, { ComponentProps, ComponentType, FC } from "react";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "./apollo";
import { pipe } from "ramda";
import { IonApp } from "@ionic/react";

type AnyComponent = ComponentType<any>;

/** generates an HOC from a regular Component */
function withWrapperCmp<Outer extends AnyComponent>(
  Outer: Outer,
  ...props: ComponentProps<ComponentType> extends ComponentProps<Outer>
    ? [] | [Omit<ComponentProps<Outer>, "children">]
    : [Omit<ComponentProps<Outer>, "children">] // i.e., if Outer has no props (excluding `children`, of course), don't require a props object
) {
  const [outerProps] = props;

  return <Inner extends AnyComponent>(Inner: Inner) => {
    type InnerProps = ComponentProps<Inner>;
    const WrappedCmp: FC<InnerProps> = (props: InnerProps) =>
      React.createElement(
        Outer,
        outerProps ?? {},
        React.createElement(Inner, props)
      );

    WrappedCmp.displayName = `withWrapperCmp(${
      Outer.name || "Unknown Outer Component"
    })`;

    return WrappedCmp;
  };
}

export const withApollo = withWrapperCmp(ApolloProvider, {
  client: apolloClient,
});

export const withIonApp = withWrapperCmp(IonApp);

/** Would be a composition of HOCs if we needed more effects
 * to run our App
 *
 * Currently Includes:
 * - ApolloProvider */
export const withAppEffects = (Component: AnyComponent) =>
  pipe(withApollo, withIonApp)(Component);

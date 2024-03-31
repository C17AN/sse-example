import { PropsWithChildren } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

type TransitionProps = {
  name: string;
};

const Transition = ({ name, children }: PropsWithChildren<TransitionProps>) => {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={name ? "name" : "empty"}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="fade"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Transition;

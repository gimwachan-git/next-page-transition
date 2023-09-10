import React from "react";
import { AnimationProps, AnimationDefinition } from "framer-motion";
interface TransitionProps {
    children: React.ReactNode;
    initial?: AnimationProps["initial"];
    animate?: AnimationDefinition;
    exit?: AnimationDefinition;
}
declare const _default: React.NamedExoticComponent<TransitionProps>;
export default _default;

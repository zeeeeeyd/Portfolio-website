import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 *
 * @param {Object} props
 * @param {string} props.classNameInView - The class name to apply when the element is in view
 * @param {string} props.classNameNotInView - The class name to apply when the element is not in view
 * @param {React.ReactNode} props.children
 */
export default function InView({
    classNameInView,
    classNameNotInView,
    children,
    ...props
}) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            className={isInView ? classNameInView : classNameNotInView}
            {...props}
        >
            {children}
        </div>
    );
}

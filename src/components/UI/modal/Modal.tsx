import React from "react";
import style from "./Modal.module.scss";

interface ModalProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, visible, setVisible }: ModalProps): JSX.Element => {
    const rootClasses = [style.modal];

    if (visible) {
        rootClasses.push(style.active);
    }

    return (
        <div
            className={rootClasses.join(" ")}
            onClick={() => setVisible(false)}
        >
            <div
                className={style.modal__content}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={style.modal__closeBtn}
                    onClick={() => setVisible(false)}
                >
                X
                </button>

                    {children}

            </div>
        </div>
    );
};

export default Modal;

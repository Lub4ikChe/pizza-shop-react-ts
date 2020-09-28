import React, { ReactNode } from 'react'
import classNames from 'classnames';

interface IButton {
    children: ReactNode,
    outline?: boolean,
    className?: string,
    onClick?: () => void
}

export const Button: React.FC<IButton> = ({ className, outline, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline
            })}>
            {children}
        </button>
    )
}

import React, { ReactNode } from 'react'
import classNames from 'classnames';

interface IButton {
    children: ReactNode,
    outline?: boolean,
    className?: string,
}

export const Button: React.FC<IButton> = ({ className, outline, children }) => {
    return (
        <button className={classNames('button', className, {
            'button--outline': outline
        })}>
            {children}
        </button>
    )
}

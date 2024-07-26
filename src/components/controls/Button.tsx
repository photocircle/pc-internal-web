import './Button.less'

type Props = {
    variant: 'link' | 'primary' | 'secondary'
    className: string
    tooltip: string
    tooltipPosition: 'top' | 'bottom' | 'left' | 'right'
    children: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export function Button({ className, variant, tooltip, tooltipPosition, children, onClick }: Props) {
    return (
        <div className={`Button ${variant} ${className}`}>
            <button type="button"
                data-tooltip-id="tooltip"
                data-tooltip-content={tooltip}
                data-tooltip-place={tooltipPosition}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}
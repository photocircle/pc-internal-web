import './Input.less'

type Props = {
    value: string
    type: string,
    placeholder?: string
    iconRight?: React.ReactNode
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function Input({ type, value, placeholder, iconRight, onChange }: Props) {
    return (
        <div className="Input">
            <input type={type} placeholder={placeholder} onChange={onChange} value={value} />

            {iconRight}
        </div>
    );
}
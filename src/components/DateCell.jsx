import './DateCell.css'

export default function DateCell({ children, name = false, style = {}, border = {}, disabled = false }) {
    return (
        <span className={`cell ${name && 'day'} ${disabled && 'disabled'}`}
            style={{ ...style, ...border }}
        >
            {children}
        </span>
    )
}

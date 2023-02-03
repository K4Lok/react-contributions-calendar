import './DateCell.css'

export default function DateCell({ children, name = false, style = {}, border = {} }) {
    return (
        <span className={`cell ${name && 'day'}`}
            style={{ ...style, ...border }}
        >
            {children}
        </span>
    )
}

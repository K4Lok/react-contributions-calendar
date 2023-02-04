import './DateCell.css'

export default function DateCell({ children, date = false, style = {}, border = {}, disabled = false }) {
    const commits = Math.floor(Math.random() * 30)
    const MAX_DEGREE = 12
    const colorDegree = commits >= MAX_DEGREE ? MAX_DEGREE : commits

    console.log(colorDegree)

    return (
        <span className={`cell ${date && 'day'} ${disabled && 'disabled'}`}
            style={{ ...style, ...border }}
        >
            {children}
            {date &&
                <span
                    className='cell-background'
                    style={{backgroundColor: `hsl(202, 70%, ${90 - 2 * colorDegree}%)`}}
                />
            }
        </span>
    )
}

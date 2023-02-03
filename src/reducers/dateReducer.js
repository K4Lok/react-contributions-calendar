export const ACTION = {
    INITIALIZE_DATES: 'initialize_dates',
    CALCULATE_DATES: 'calculate_dates',
    PREV_MONTH: 'prev_month',
    NEXT_MONTH: 'next_month',
}

export const INIT_STATE = {
    date: new Date(),
    currentMonth: 0,
    currentYear: 0,
    firstDayOfMonth: 0,
    lastDayOfMonth: 0,
    totalDays: 0,
    firstDayInWeek: 0, 
    lastDayInWeek: 0, 
    prevDays: 0,
    nextDays: 0
}

export const dateReducer = (state, action) => {
    switch(action.type) {
        case ACTION.INITIALIZE_DATES:
            return initializeDates(state)
        case ACTION.PREV_MONTH:
            return handlePrevMonth(state, action.payload.date)
        case ACTION.NEXT_MONTH:
            return handleNextMonth(state, action.payload.date)
        default: 
            return state
    }
}

const initializeDates = (state) => {
    const date = new Date()

    return handleCalculateDates(state, date)
}

const handleCalculateDates = (state, date) => {
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
    const totalDays = lastDayOfMonth.getDate()

    const firstDayInWeek = firstDayOfMonth.getDay()
    const lastDayInWeek = lastDayOfMonth.getDay()

    return {
        ...state,
        date,
        currentMonth,
        currentYear,
        firstDayOfMonth,
        lastDayOfMonth,
        totalDays,
    }
}

const handlePrevMonth = (state, date) => {
    const currentDate = new Date(date)
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    let nextMonth = currentMonth - 1
    let nextYear = currentYear

    if (currentMonth === 0) {
        nextMonth = 11
        nextYear = currentYear - 1
    }
    const nextDate = new Date(nextYear, nextMonth)

    return handleCalculateDates(state, nextDate)
}

const handleNextMonth = (state, date) => {
    const currentDate = new Date(date)
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    let nextMonth = currentMonth + 1
    let nextYear = currentYear

    if (currentMonth === 11) {
        nextMonth = 0
        nextYear = currentYear + 1
    }
    const nextDate = new Date(nextYear, nextMonth)

    return handleCalculateDates(state, nextDate)
}
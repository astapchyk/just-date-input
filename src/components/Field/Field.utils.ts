const formatDateDigits = (digits: string): string => {
    const normalized = digits.slice(0, 8);

    const day = normalized.slice(0, 2);
    const month = normalized.slice(2, 4);
    const year = normalized.slice(4, 8);

    let result = '';

    if (day.length > 0) {
        result += day;
        if (day.length === 2) result += '/';
    }

    if (month.length > 0) {
        result += month;
        if (month.length === 2) result += '/';
    }

    if (year.length > 0) {
        result += year;
    }

    return result;
}

export const onDateChange = (onChange: (v: string) => void, previousValue: string) =>
    (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        const originalPos = input.selectionStart!;

        let formatted: string = '';
        let nextPos: number = 0;

        const type = (e.nativeEvent as InputEvent).inputType;

        if (type.startsWith('delete')) {
            const delta = previousValue[originalPos] === '/' ? -1 : 0;

            const digits = (value.slice(0, originalPos + delta) + value.slice(originalPos)).replace(/\D/g, '');

            formatted = formatDateDigits(digits);

            nextPos = originalPos + delta;
        } else {
            formatted = formatDateDigits(value.replace(/\D/g, ''));

            const delta = (formatted[originalPos] === '/' ? 1 : 0);

            nextPos = Math.min(originalPos + delta, formatted.length);
        }

        onChange(formatted);

        requestAnimationFrame(() =>
            input.setSelectionRange(nextPos, nextPos));

    }
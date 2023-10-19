block('date')(
    content()((node, ctx) => {
        var date = new Date(ctx.date),
            today = new Date(),
            _hours = date.getHours(),
            _minutes = date.getMinutes(),
            hours = _hours > 9 ? _hours : `0${_hours}`,
            minutes = _minutes > 9 ? _minutes : `0${_minutes}`,
            months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'],
            date_str = `${date.getDate()} ${months[date.getMonth()]}`;

        date.getDate() === today.getDate() - 1 && (date_str = 'вчера');
        date.getDate() === today.getDate() && (date_str = 'сегодня');
        date.getDate() === today.getDate() + 1 && (date_str = 'завтра');

        return `${date_str} в ${hours}:${minutes}`;
    })
);

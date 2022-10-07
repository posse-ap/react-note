import React from 'react';

export default function DateFormat({date}) {

    if(!date) return <></>;

    const d = new Date(date);
    return (
        <>
            {d.getFullYear()}年
            {d.getMonth() + 1}月
            {d.getDate()}日
            {('0' + d.getHours()).slice(-2)}:{('0' + d.getMinutes()).slice(-2)}
        </>
    );
}

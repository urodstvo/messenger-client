import { Badge } from '@/ui/badge';

import { MessageBubble } from './MessageBubble';

import mock from './mock.json';

const formatDate = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
    }).format(date);

    const [month, day] = formattedDate.split(' ');

    return `${month}, ${day}`;
};

type DateGroupProps = {
    date: Date;
};

export const DateGroup = (props: DateGroupProps) => {
    const mineId = 2;

    return (
        <section className="flex flex-col gap-1">
            <header className="flex justify-center">
                <Badge variant="outline">{formatDate(props.date)}</Badge>
            </header>
            {mock.messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    author={message.author}
                    date={new Date(message.date)}
                    message={message.text}
                    isMine={message.author.id === mineId}
                    status={message.status as 'error' | 'delievered' | 'readed'}
                />
            ))}
        </section>
    );
};
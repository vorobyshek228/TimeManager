import Events from '../types/events'

export type State = {
    events: Events[]
}

export type EventAction = {
    type: string,
    payload: Events
}

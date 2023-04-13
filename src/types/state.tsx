import Events from './events'

export type State = {
    events: Events[]
}

export type EventAction = {
    type: string,
    payload: Events
}

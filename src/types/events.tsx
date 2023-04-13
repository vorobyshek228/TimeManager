
type Events = {
    start:string | null | undefined,
    end?:string | null,
    title:string,
    allDay:boolean,
    id: string,
    startRecur?:string | null | undefined ,
    endRecur?: string | null | undefined ,
}
export default Events
import { useCalendarStore } from "../../hooks/useCalendarStore"


//"Fab" viene de "floating action button"
export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore()

    const handleDelete = () => {
        startDeletingEvent()
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
            style={{display: hasEventSelected ? '' : 'none'}}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}

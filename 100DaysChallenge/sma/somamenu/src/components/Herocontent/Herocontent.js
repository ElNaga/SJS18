


export const Herocontent = ({setShow}) => {



    return (
        <div>
            <div className="gallery-left">
                This is hero content
            </div>
            <div className="buttons-right">
        <a onClick={() => setShow('Menu')}>Click</a>
            </div>
        </div>
    )
}
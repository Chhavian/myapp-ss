import React from 'react'

function TabItem(props) {
    return (
        <div >
            <div className={props.isActive ? 'tabitem' : 'tabitem tabitem--inactive'} style={{ borderRadius: props.idx === 1 ? '10px 0 0 10px' : props.idx === 5 ? '0 10px 10px 0' : '', borderLeft: props.idx === 1 ? '' : '2.5px solid rgba(119,119,119, 0.4)' }} onClick={props.onItemClicked}>
                <p className="tabitem__title" style={{ color: props.isActive ? "white" : "#5a6e8f" }}>{props.title}</p>
            </div>
        </div>
    )
}

export default TabItem

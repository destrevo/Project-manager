import React from 'react'
import './DataRenderInModal.css'


export default function DataRenderInModal({ data }) {
    const DataForRender = !!data ? [data] : []
    return (

        <div className='data-render-in-modal'>
            {DataForRender.length > 0 && DataForRender.map((x, k) => {
                return (
                    <div key={k}>
                        <div className='top'>
                            <span><strong>name:</strong>  {x.name}</span>
                            <span>description : {x.desc}</span>
                        </div>
                        <div className='middle'>
                            {x.ppl_on_project.map((x, k) => {
                                return (
                                    <div key={k}>
                                        <span>name : {x.name}</span>
                                        <span>position : {x.position}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='middle'>
                            {x.links.map((x, k) => {
                                return (
                                    <div key={k}>
                                        <span>name : {x.name}</span>
                                        <span>src : <a
                                            href={x.src}
                                            rel="noreferrer"
                                            target="_blank"
                                        >{x.src}</a></span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

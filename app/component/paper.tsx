import React, { FC } from 'react'

interface Props {
    title: string
    description: string
    published: string
    url: string
    tags: string
}

const Paper: FC<Props> = ({ title, description, published, url, tags }) => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var publishDate = new Date(published)

    return (
        <div style={{marginBottom: `0.5rem`, padding: `1rem`}}>
            <h1 style={{ fontSize: `2rem`, fontWeight: `bold` }}>{title}</h1>
            <div
                style={{
                    // italic
                    fontSize: `0.75rem`,
                    fontStyle: `italic`,
                    marginBottom: `0.25rem`,
                }}
            >
                {
                    // add # for each tag in tags
                    tags.split(', ').map((tag: string, index: number) => (
                        <span key={index} style={{marginRight: `10px`}}>
                            #{tag}
                        </span>
                    ))
                }
                <span>
                    {
                        " (Published on " + `${months[publishDate.getMonth()]} ${publishDate.getDate()}, ${publishDate.getFullYear()}` + ")"
                    }
                </span>
            </div>
            <p>{description}</p>
            <div style={{ fontSize: `0.9rem`, color: `blue`, textDecoration: `underline` }}>
                <a href={url}>Source</a>
            </div>
        </div>
    )
}

export default Paper
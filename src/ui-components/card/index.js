import * as React from "react";

class Card extends React.Component {
    
    render() {
        let { title, subtitle, text, linkText, link } = this.props;
        let linkDiv;
        if(linkText==null && link==null)
        {
            linkDiv = <a href={link} className="card-link">{linkText}</a>
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                    <p className="card-text">{text}</p>
                    {linkDiv}
                </div>
            </div>
        )
    }
}

export default Card;
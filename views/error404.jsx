const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't finde this page!</p>
                <div>
                    <img src="/images/matrix-code.jpg" alt="Black screen with green code"/>
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/technology?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div> 
            </main>
        </Def>
    )
}

module.exports = error404  
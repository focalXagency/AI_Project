import "./PageTitle.css"

function PageTitle({title1,title2,title3,title4,summary}) {
    return (
        <div className="v-100 bg-dark-08 sa_PageTitle">
            <div className="container_custom sa_containerPageTitle">
                <div>
                    <h1 className="text-white sa_bigPageTitle d-inline">{title1}</h1>
                    <h1 className="text-white sa_bigPageTitle sa_hideTitle">{title3}</h1>
                </div>
                <div className="sa_divPageTitleBottom">
                    <div>
                        <h1 className="text-white sa_bigPageTitle mb-0 text-nowrap sa_hideTitle2">{title4}</h1>
                        <h1 className="text-white sa_bigPageTitle mb-0 text-nowrap d-inline">{title2}</h1>
                    </div>
                    <p className="text-gray-60 sa_summaryPageTitle mb-0 ">{summary}</p>
                </div>
            </div>
        </div>
    )
}

export default PageTitle
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./FeaturedInfo.css"

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7.333</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4.424</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1.423</span>
                    <span className="featuredMoneyRate">2.4 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo

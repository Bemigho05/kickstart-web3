import Reac, { Component } from "react"
import { Card, Button } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import factory from "../ethereum/factory"
import Layout from "../layout/Layout"

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call()

        return  { campaigns }
    }
    renderCampaign() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true

            }
        })
        return <Card.Group items={items}/>
    }

    render() {
        return <div>
            <Layout>
                <h3>Open Campaigns</h3>
                <Button
                    floated="right"
                    content = "Create Campaign"
                    icon = "add circle"
                    primary = {true}
                />
                {this.renderCampaign()}
            </Layout>
        </div>
    }
}


export default CampaignIndex

import styles from './mainTabs.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const MainTabs = () => {
    return (
        <Tabs className={styles.mainTabs}>
            <TabList >
                <Tab>Jobs</Tab>
                <Tab>Questions</Tab>
                <Tab>Companies</Tab>
                <Tab>Skills</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    )


}

export default MainTabs


import { ImageBackground, Platform, StatusBar, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors, Fonts, Sizes, CommonStyles, FontFamily } from '../../constants/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TabView, TabBar } from "react-native-tab-view";
import * as Progress from 'react-native-progress';
import { Touchable } from '../../components/touchable';

const dummyMembers = [
    require('../../assets/images/users/user14.png'),
    require('../../assets/images/users/user12.png'),
    require('../../assets/images/users/user13.png'),
    require('../../assets/images/users/user3.png'),
    require('../../assets/images/users/user14.png'),
    require('../../assets/images/users/user11.png'),
    require('../../assets/images/users/user10.png'),
    require('../../assets/images/users/user9.png'),
    require('../../assets/images/users/user8.png'),
];

const activeProjectsList = [
    {
        id: '1',
        title: 'Shopping app project',
        date: '25 feb 2023',
        taskCount: '15 task',
        progress: 30,
        members: dummyMembers.slice(0, 6),
        fill: Colors.woodenColor,
        unfill: 'rgba(218, 152, 135, 0.16)',
    },
    {
        id: '2',
        title: 'Food delivery app project',
        date: '22 feb 2023',
        taskCount: '15 task',
        progress: 50,
        members: dummyMembers.slice(0, 5),
        fill: Colors.parrotColor,
        unfill: 'rgba(102, 195, 144, 0.16)',
    },
    {
        id: '3',
        title: '5 star hotel website',
        date: '22 feb 2023',
        taskCount: '10 task',
        progress: 60,
        members: dummyMembers.slice(0, 7),
        fill: Colors.tomatoColor,
        unfill: 'rgba(229, 113, 110, 0.16)',
    },
    {
        id: '4',
        title: 'Student tracking app',
        date: '9 feb 2023',
        taskCount: '15 task',
        progress: 60,
        members: dummyMembers.slice(0, 8),
        fill: Colors.blueColor,
        unfill: 'rgba(124, 146, 228, 0.16)',
    },
    {
        id: '5',
        title: 'PDF scanner app project',
        date: '8 feb 2023',
        taskCount: '10 task',
        progress: 80,
        members: dummyMembers.slice(0, 9),
        fill: Colors.woodenColor,
        unfill: 'rgba(218, 152, 135, 0.16)',
    },
    {
        id: '6',
        title: 'Ecommerce app project',
        date: '9 feb 2023',
        taskCount: '15 task',
        progress: 90,
        members: dummyMembers.slice(0, 6),
        fill: Colors.tomatoColor,
        unfill: 'rgba(229, 113, 110, 0.16)',
    }
];

const completedProjectsList = [
    {
        id: '1',
        title: 'Shopping app project',
        date: '25 feb 2023',
        taskCount: '15 task',
        members: dummyMembers.slice(0, 6),
        fill: Colors.woodenColor,
        unfill: 'rgba(218, 152, 135, 0.16)',
    },
    {
        id: '2',
        title: 'Food delivery app project',
        date: '22 feb 2023',
        taskCount: '15 task',
        members: dummyMembers.slice(0, 5),
        fill: Colors.parrotColor,
        unfill: 'rgba(102, 195, 144, 0.16)',
    },
    {
        id: '3',
        title: '5 star hotel website',
        date: '22 feb 2023',
        taskCount: '10 task',
        members: dummyMembers.slice(0, 7),
        fill: Colors.tomatoColor,
        unfill: 'rgba(229, 113, 110, 0.16)',
    },
    {
        id: '4',
        title: 'Student tracking app',
        date: '9 feb 2023',
        taskCount: '15 task',
        members: dummyMembers.slice(0, 8),
        fill: Colors.blueColor,
        unfill: 'rgba(124, 146, 228, 0.16)',
    },
    {
        id: '5',
        title: 'PDF scanner app project',
        date: '8 feb 2023',
        taskCount: '10 task',
        members: dummyMembers.slice(0, 9),
        fill: Colors.woodenColor,
        unfill: 'rgba(218, 152, 135, 0.16)',
    },
    {
        id: '6',
        title: 'Ecommerce app project',
        date: '9 feb 2023',
        taskCount: '15 task',
        members: dummyMembers.slice(0, 6),
        fill: Colors.tomatoColor,
        unfill: 'rgba(229, 113, 110, 0.16)',
    }
];

const ProjectScreen = ({ navigation, route }) => {

    useEffect(() => {
        if (route.params) {
            if (route.params.category === "complete") {
                deleteCompleteProject({ id: route.params.id })
            }
            else if (route.params.category === "active") {
                deleteActiveProject({ id: route.params.id })
            }
        }
    }, [route.params]);

    const [index, setIndex] = useState(0);
    const [activeProjects, setactiveProjects] = useState(activeProjectsList);
    const [completeProjects, setcompleteProjects] = useState(completedProjectsList);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            {header()}
            {projectAndTaskInfo()}
            {tabBarInfo()}
            {addButton()}
        </View>
    )

    function deleteCompleteProject({ id }) {
        const newData = completeProjects.filter((item) => item.id !== id);
        setcompleteProjects(newData);
    }

    function deleteActiveProject({ id }) {
        const newData = activeProjects.filter((item) => item.id !== id);
        setactiveProjects(newData);
    }

    function addButton() {
        return (
            <View style={styles.addButtonOuterCircle}>
                <Touchable
                    onPress={() => { navigation.push('AddNewTask') }}
                    style={styles.addButtonInnerCircle}
                >
                    <MaterialIcons name="add" size={33} color={Colors.whiteColor} />
                </Touchable>
            </View>
        )
    }

    function tabBarInfo() {

        const routes = [
            { key: "first", title: "Active" },
            { key: "second", title: "Completed" },
        ];

        const renderScene = ({ route }) => {
            switch (route.key) {
                case "first":
                    return <Active navigation={navigation} activeProjects={activeProjects} />
                case "second":
                    return <Complete navigation={navigation} completeProjects={completeProjects} />
            }
        };

        return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}                
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ height: 0 }}
                        style={{ backgroundColor: '#EDEDED', elevation: 0, }}
                        pressColor={Colors.bodyBackColor}
                        renderLabel={({ route, focused }) => (
                            <Text
                                numberOfLines={1}
                                style={{ ...(focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.grayColor16SemiBold }), }}
                            >
                                {route.title}
                            </Text>
                        )}
                    />
                )}
            />
        )
    }

    function projectAndTaskInfo() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...styles.projectAndTaskBox, marginRight: Sizes.fixPadding }}>
                    <View style={styles.projectAndTaskIconWrapper}>
                        <Ionicons
                            name='document-outline'
                            color={Colors.whiteColor}
                            size={20}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                            Total project
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                            15 Project
                        </Text>
                    </View>
                </View>
                <View style={{ ...styles.projectAndTaskBox, marginLeft: Sizes.fixPadding }}>
                    <View style={styles.projectAndTaskIconWrapper}>
                        <MaterialIcons
                            name='list-alt'
                            color={Colors.whiteColor}
                            size={20}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                            Task done
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                            25% task done
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={{ backgroundColor: Colors.primaryColor }}>
                <ImageBackground
                    source={require('../../assets/images/top_image2.png')}
                    style={{ width: '100%' }}
                    tintColor='rgba(241, 183,255,0.8)'
                >
                    <View style={styles.headerWrapStyle}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={{ ...Fonts.whiteColor22SemiBold }}>
                                Project
                            </Text>
                            <Text numberOfLines={1} style={{ ...Fonts.whiteColor16Medium, opacity: 0.8 }}>
                                View all project
                            </Text>
                        </View>
                        <Image
                            source={require('../../assets/images/women_working.png')}
                            style={{ width: 95, height: 95.0, }}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const Complete = (props) => {
    const renderItem = ({ item }) => (
        <Touchable
            onPress={() => { props.navigation.push('ProjectDetail', { item, category: 'complete' }) }}
            style={styles.taskCard}
        >
            <View style={styles.taskCardDivider} />
            <View style={{ flex: 1, margin: Sizes.fixPadding }}>
                <View style={{ ...CommonStyles.rowAlignCenter, }}>
                    <View style={{ flex: 1, marginRight: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                            {item.title}
                        </Text>
                        <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding - 5.0 }}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <MaterialIcons
                                    name='calendar-today'
                                    color={Colors.grayColor}
                                    size={14}
                                />
                                <Text numberOfLines={1} style={{ flex: 1, ...Fonts.grayColor12SemiBold, marginLeft: Sizes.fixPadding - 5.0 }}>
                                    {item.date}
                                </Text>
                            </View>
                            <View style={styles.dateAndTaskDivider} />
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <MaterialIcons
                                    name='list-alt'
                                    color={Colors.grayColor}
                                    size={16}
                                />
                                <Text numberOfLines={1} style={{ flex: 1, ...Fonts.grayColor12SemiBold, marginLeft: Sizes.fixPadding - 5.0 }}>
                                    {item.taskCount}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            ...CommonStyles.rowAlignCenter,
                            marginRight: item.members.length > 4 ? -25 : -(item.members.length * 5)
                        }}
                    >
                        {
                            item.members.slice(0, 4).map((i, index) => (
                                <Image
                                    key={`${index}`}
                                    source={i}
                                    style={{ ...styles.selectedMemberStyle, left: -(index * 6) }}
                                />
                            ))
                        }
                        {
                            item.members.length > 4
                                ?
                                <View style={{ ...styles.selectedMemberStyle, ...CommonStyles.center, left: -25.0 }}>
                                    <Text style={{ ...Fonts.blackColor12SemiBold }}>
                                        +{item.members.length - 4}
                                    </Text>
                                </View>
                                :
                                null
                        }
                    </View>
                </View>
                <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding }}>
                    <View style={{ flex: 1 }}>
                        <Progress.Bar
                            progress={1}
                            width={null}
                            height={4}
                            color={item.fill}
                            unfilledColor={item.unfill}
                            borderWidth={0}
                        />
                    </View>
                    <MaterialIcons
                        name='done'
                        color={item.fill}
                        size={18}
                        style={{ marginLeft: Sizes.fixPadding - 4.0 }}
                    />
                </View>
            </View>
        </Touchable>
    )
    return (
        <View style={{ flex: 1 }}>
            {
                props.completeProjects.length == 0
                    ?
                    noDataInfo()
                    :
                    <FlatList
                        data={props.completeProjects}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0 }}
                    />
            }

        </View>
    )

    function noDataInfo() {
        return (
            <View style={{ flex: 1, ...CommonStyles.center }}>
                <Image
                    source={require('../../assets/images/icons/folder.png')}
                    style={{ width: 55.0, height: 55.0, resizeMode: 'contain' }}
                />
                <Text style={{ ...Fonts.grayColor16Medium }}>
                    Empty project list
                </Text>
            </View>
        )
    }
}

const Active = (props) => {
    const renderItem = ({ item }) => (
        <Touchable
            onPress={() => { props.navigation.push('ProjectDetail', { item, category: 'active' }) }}
            style={styles.taskCard}
        >
            <View style={styles.taskCardDivider} />
            <View style={{ flex: 1, margin: Sizes.fixPadding }}>
                <View style={{ ...CommonStyles.rowAlignCenter, }}>
                    <View style={{ flex: 1, marginRight: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                            {item.title}
                        </Text>
                        <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding - 5.0 }}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <MaterialIcons
                                    name='calendar-today'
                                    color={Colors.grayColor}
                                    size={14}
                                />
                                <Text numberOfLines={1} style={{ flex: 1, ...Fonts.grayColor12SemiBold, marginLeft: Sizes.fixPadding - 5.0 }}>
                                    {item.date}
                                </Text>
                            </View>
                            <View style={styles.dateAndTaskDivider} />
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <MaterialIcons
                                    name='list-alt'
                                    color={Colors.grayColor}
                                    size={16}
                                />
                                <Text numberOfLines={1} style={{ flex: 1, ...Fonts.grayColor12SemiBold, marginLeft: Sizes.fixPadding - 5.0 }}>
                                    {item.taskCount}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            ...CommonStyles.rowAlignCenter,
                            marginRight: item.members.length > 4 ? -25 : -(item.members.length * 5)
                        }}
                    >
                        {
                            item.members.slice(0, 4).map((i, index) => (
                                <Image
                                    key={`${index}`}
                                    source={i}
                                    style={{ ...styles.selectedMemberStyle, left: -(index * 6) }}
                                />
                            ))
                        }
                        {
                            item.members.length > 4
                                ?
                                <View style={{ ...styles.selectedMemberStyle, ...CommonStyles.center, left: -25.0 }}>
                                    <Text style={{ ...Fonts.blackColor12SemiBold }}>
                                        +{item.members.length - 4}
                                    </Text>
                                </View>
                                :
                                null
                        }
                    </View>
                </View>
                <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding }}>
                    <View style={{ flex: 1 }}>
                        <Progress.Bar
                            progress={item.progress / 100}
                            width={null}
                            height={4}
                            color={item.fill}
                            unfilledColor={item.unfill}
                            borderWidth={0}
                        />
                    </View>
                    <Text style={{ color: item.fill, ...styles.progressTextStyle, }}>
                        {item.progress}%
                    </Text>
                </View>
            </View>
        </Touchable>
    )
    return (
        <View style={{ flex: 1 }}>
            {
                props.activeProjects.length == 0
                    ?
                    noDataInfo()
                    :
                    <FlatList
                        data={props.activeProjects}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0 }}
                    />
            }
        </View>
    )

    function noDataInfo() {
        return (
            <View style={{ flex: 1, ...CommonStyles.center }}>
                <Image
                    source={require('../../assets/images/icons/folder.png')}
                    style={{ width: 55.0, height: 55.0, resizeMode: 'contain' }}
                />
                <Text style={{ ...Fonts.grayColor16Medium }}>
                    Empty project list
                </Text>
            </View>
        )
    }
}

export default ProjectScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        ...CommonStyles.rowAlignCenter,
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Platform.OS == 'ios' ? Sizes.fixPadding * 5.0 : StatusBar.currentHeight + Sizes.fixPadding,
    },
    projectAndTaskIconWrapper: {
        width: 40.0,
        height: 40.0,
        borderRadius: 20.0,
        ...CommonStyles.center,
        backgroundColor: Colors.primaryColor
    },
    projectAndTaskBox: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding + 2.0,
        paddingVertical: Sizes.fixPadding * 2.5,
        ...CommonStyles.rowAlignCenter,
    },
    selectedMemberStyle: {
        width: 25.0,
        height: 25.0,
        borderColor: Colors.whiteColor,
        borderWidth: 2.0,
        borderRadius: 13.0,
        backgroundColor: Colors.extraLightGrayColor,
        overflow: 'hidden',
    },
    taskCardDivider: {
        width: 8.0,
        backgroundColor: '#D0CFCF',
        borderTopLeftRadius: Sizes.fixPadding,
        borderBottomLeftRadius: Sizes.fixPadding
    },
    taskCard: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.5,
    },
    progressTextStyle: {
        fontSize: 12.0,
        fontFamily: FontFamily.bold,
        marginLeft: Sizes.fixPadding - 4.0
    },
    dateAndTaskDivider: {
        height: 15.0,
        width: 1.0,
        backgroundColor: Colors.grayColor,
        marginHorizontal: Sizes.fixPadding - 5.0
    },
    addButtonOuterCircle: {
        backgroundColor: Colors.primaryColor,
        position: 'absolute',
        bottom: 25.0,
        right: 20.0,
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
    },
    addButtonInnerCircle: {
        backgroundColor: Colors.primaryColor,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 4.0,
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        ...CommonStyles.center,
        ...CommonStyles.buttonShadow,
        shadowColor: Colors.blackColor,
        shadowOpacity: 0.25,
    }
})
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { images } from "../../constants";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const Home = () => {
 const posts = [{
    id:1,
    title: "Learn Vue.js in 30 Minutes",
    thumbnail: "https://i.ytimg.com/vi/abc123/default.jpg",
    video: "https://www.youtube.com/watch?v=1bVzEHDOtXs&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm&index=4",
    creator: {
      username: "CodeWithJohn",
      avatar: "https://example.com/avatars/john.jpg",
    },
  },
  {
    id:2,
    title: "Vue 3 Full Course - 5 Hours",
    thumbnail: "https://i.ytimg.com/vi/def456/default.jpg",
    video: "https://www.youtube.com/watch?v=1bVzEHDOtXs&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm&index=4",
    creator: {
      username: "TechTutorials",
      avatar: "https://example.com/avatars/techtutorials.jpg",
    },
  },
  {
    id:3,
    title: "Advanced Vue.js Patterns",
    thumbnail: "https://i.ytimg.com/vi/ghi789/default.jpg",
    video: "https://www.youtube.com/watch?v=1bVzEHDOtXs&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm&index=4",
    creator: {
      username: "VueMaster",
      avatar: "https://example.com/avatars/vuemaster.jpg",
    },
  },
  {
    id:4,
    title: "Top 10 Vue.js Libraries in 2024",
    thumbnail: "https://i.ytimg.com/vi/jkl012/default.jpg",
    video: "https://www.youtube.com/watch?v=1bVzEHDOtXs&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm&index=4",
    creator: {
      username: "DevInsight",
      avatar: "https://example.com/avatars/devinsight.jpg",
    },
  },
  {
    id:5,
    title: "State Management in Vue with Vuex",
    thumbnail: "https://i.ytimg.com/vi/mno345/default.jpg",
    video: "https://www.youtube.com/watch?v=1bVzEHDOtXs&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm&index=4",
    creator: {
      username: "CodeAcademy",
      avatar: "https://example.com/avatars/codeacademy.jpg",
    },
  },
  {
    id:6,
    title: "Vue Router Tutorial for Beginners",
    thumbnail: "https://i.ytimg.com/vi/pqr678/default.jpg",
    video: "https://www.youtube.com/watch?v=1bVzEHDOtXs&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm&index=4",
    creator: {
      username: "VueLearner",
      avatar: "https://example.com/avatars/vuelearner.jpg",
    },
  },
  {
    id:7,
    title: "Building a Todo App with Vue.js",
    thumbnail: "https://i.ytimg.com/vi/stu901/default.jpg",
    video: "https://www.youtube.com/watch?v=stu901",
    creator: {
      username: "CodingNinja",
      avatar: "https://example.com/avatars/codingninja.jpg",
    },
  },
  {
    id:8,
    title: "Vue 3 Composition API Explained",
    thumbnail: "https://i.ytimg.com/vi/vwx234/default.jpg",
    video: "https://www.youtube.com/watch?v=vwx234",
    creator: {
      username: "TechGuru",
      avatar: "https://example.com/avatars/techguru.jpg",
    },
  },
  {
    id:9,
    title: "Deploying Vue.js Apps to Netlify",
    thumbnail: "https://i.ytimg.com/vi/yzb567/default.jpg",
    video: "https://www.youtube.com/watch?v=yzb567",
    creator: {
      username: "NetlifyExpert",
      avatar: "https://example.com/avatars/netlifyexpert.jpg",
    },
  },
];
  const latestPosts  =[{
    id:10,
    title: "Learn Vue.js in 30 Minutes",
    thumbnail: "https://i.ytimg.com/vi/abc123/default.jpg",
    video: "https://www.youtube.com/watch?v=1bVzEHDOtXs&list=PL4cUxeGkcC9hYBP0AZ3MNdEiiZqd4mHGm&index=4",
    creator: {
      username: "CodeWithJohn",
      avatar: "https://example.com/avatars/john.jpg",
    },
  },
  {
    id:11,
    title: "Vue 3 Full Course - 5 Hours",
    thumbnail: "https://i.ytimg.com/vi/def456/default.jpg",
    video: "https://www.youtube.com/watch?v=def456",
    creator: {
      username: "TechTutorials",
      avatar: "https://example.com/avatars/techtutorials.jpg",
    },
  },
  {
    id:12,
    title: "Advanced Vue.js Patterns",
    thumbnail: "https://i.ytimg.com/vi/ghi789/default.jpg",
    video: "https://www.youtube.com/watch?v=ghi789",
    creator: {
      username: "VueMaster",
      avatar: "https://example.com/avatars/vuemaster.jpg",
    },
  },
  {
    id:13,
    title: "Top 10 Vue.js Libraries in 2024",
    thumbnail: "https://i.ytimg.com/vi/jkl012/default.jpg",
    video: "https://www.youtube.com/watch?v=jkl012",
    creator: {
      username: "DevInsight",
      avatar: "https://example.com/avatars/devinsight.jpg",
    },
  },
  {
    id:14,
    title: "State Management in Vue with Vuex",
    thumbnail: "https://i.ytimg.com/vi/mno345/default.jpg",
    video: "https://www.youtube.com/watch?v=mno345",
    creator: {
      username: "CodeAcademy",
      avatar: "https://example.com/avatars/codeacademy.jpg",
    },
  },
  {
    id:15,
    title: "Vue Router Tutorial for Beginners",
    thumbnail: "https://i.ytimg.com/vi/pqr678/default.jpg",
    video: "https://www.youtube.com/watch?v=pqr678",
    creator: {
      username: "VueLearner",
      avatar: "https://example.com/avatars/vuelearner.jpg",
    },
  },
  {
    id:16,
    title: "Building a Todo App with Vue.js",
    thumbnail: "https://i.ytimg.com/vi/stu901/default.jpg",
    video: "https://www.youtube.com/watch?v=stu901",
    creator: {
      username: "CodingNinja",
      avatar: "https://example.com/avatars/codingninja.jpg",
    },
  }
];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={posts}
        key={(item) => item.id}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

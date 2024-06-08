const forumTopics = [
  {
    id: 1,
    title: 'How to scale your startup?',
    owner: { name: 'Alice Johnson', company: 'Tech Innovators', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
    content: 'In this forum, we will discuss various strategies for scaling startups. Feel free to share your experiences and insights!',
    contributors: [
      { name: 'Bob Smith', company: 'Future Enterprises', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
      { name: 'Charlie Brown', company: 'Capital Ventures', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
    ],
  },
  {
    id: 2,
    title: 'Fundraising Tips and Tricks',
    owner: { name: 'Charlie Brown', company: 'Capital Ventures', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
    content: 'Join us in sharing your experiences and tips on fundraising for startups. Whether it\'s seed funding, venture capital, or crowdfunding, let\'s learn from each other!',
    contributors: [
      { name: 'Alice Johnson', company: 'Tech Innovators', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIUUwf1GuV6YhA08a9haUQBOBRqJinQCJxA&s' },
    ],
  },
  {
    id: 3,
    title: 'Best Marketing Strategies for Startups',
    owner: { name: 'John Doe', company: 'Marketing Wizards', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
    content: 'Let\'s discuss the most effective marketing strategies for startups. Share your success stories and best practices!',
    contributors: [
      { name: 'Emily Green', company: 'Digital Trends', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIUUwf1GuV6YhA08a9haUQBOBRqJinQCJxA&s' },
      { name: 'Michael Johnson', company: 'Growth Hackers', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
      { name: 'Sarah Lee', company: 'Marketing Masters', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIUUwf1GuV6YhA08a9haUQBOBRqJinQCJxA&s' },
    ],
  },
  {
    id: 4,
    title: 'Finding the Right Co-Founder',
    owner: { name: 'Lucas Adams', company: 'Startup Hub', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
    content: 'Discuss the challenges and strategies for finding the perfect co-founder for your startup. Share your experiences and tips!',
    contributors: [
      { name: 'Emma Watson', company: 'Founder Match', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIUUwf1GuV6YhA08a9haUQBOBRqJinQCJxA&s' },
      { name: 'John Doe', company: 'Startup Advisers', avatar: 'https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' },
    ],
  },
];
const Community = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Community Forum</h1>
      <h2 className="text-lg text-gray-600">Build your networks here.</h2>
      <div className="w-full border-t border-gray-300 my-4"></div>
      <button className="mb-4 p-4 rounded-sm text-white bg-gradient-to-r from-purple-800 to-purple-500 transform transition-transform duration-300 hover:scale-105">+ Create new post</button>
      <div>
        {forumTopics.map((topic) => (
          <div key={topic.id} className="mb-4 bg-white p-4 border border-gray-400 rounded shadow">
            <div className="flex items-center space-x-4 mb-2">
              <img className="w-12 h-12 rounded-full" src={topic.owner.avatar} alt={topic.owner.name} />
              <div>
                <p className="font-semibold">{topic.owner.name}</p>
                <p className="text-sm text-gray-500">{topic.owner.company}</p>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
            <p className="mb-2">{topic.content}</p>
            <div className="flex flex-wrap -mx-1">
              {topic.contributors.map((contributor, index) => (
                <div key={index} className="flex items-center space-x-1 mb-1 mx-1">
                  <img className="w-6 h-6 rounded-full" src={contributor.avatar} alt={contributor.name} />
                  <span className="text-xs text-gray-500">{contributor.name}</span>
                </div>
              ))}
              {topic.contributors.length > 3 && (
                <div className="flex items-center text-gray-500">
                  <span>+{topic.contributors.length - 3}</span>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button className="py-2 px-6 rounded-sm text-white bg-gradient-to-r from-purple-800 to-purple-500 transform transition-transform duration-300 hover:scale-105">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;

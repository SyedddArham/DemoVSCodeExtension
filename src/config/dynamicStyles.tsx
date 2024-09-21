// src/config/dynamicStyles.js

const containerData = {
  style: {
    backgroundColor: '#4caf50',
    padding: 20,
    margin: 15,
    borderRadius: 10,
    width: '80%', // Can also be a number (e.g., 300)
    height: 200,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    position: 'relative', // Could also be 'absolute'
    top: 10, // Only useful if position is 'absolute' or 'relative'
    left: 0, // For positioning
    borderColor: '#000',
    borderWidth: 2,
  },
  text: {
    content: 'Hello dynamic Container!',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center', // Align text inside the container
    fontWeight: 'bold',  // Customize font weight
  }
};
// src/config/dynamicStyles.js

const gridData = {
    rows: 2, // Number of rows
    columns: 3, // Number of columns
    spacing: 10, // Space between grid items
    style: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    items: [
      { content: 'Item 1', color: '#ff5722', fontSize: 16 },
      { content: 'Item 2', color: '#4caf50', fontSize: 18 },
      { content: 'Item 3', color: '#2196f3', fontSize: 16 },
      { content: 'Item 4', color: '#ffeb3b', fontSize: 18 },
      { content: 'Item 5', color: '#e91e63', fontSize: 16 },
      { content: 'Item 6', color: '#9c27b0', fontSize: 18 },
    ],
  };

 // src/config/dynamicStyles.js

const cardData = {
  style: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1, // No "px"
    borderRadius: 8,
    padding: 20,
    width: '80%', // Percentages are allowed in React Native for width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
    marginVertical: 10,
  },
  header: {
    content: 'Card Header',
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  body: {
    content: 'This is a dynamic card body content. It can be customized using JSON data!',
    color: '#555',
    fontSize: 16,
    textAlign: 'left',
  },
  footer: {
    content: 'Card Footer',
    color: '#999',
    fontSize: 14,
    textAlign: 'right',
  },
};
const navBarData = {
  style: {
    backgroundColor: '#6200ea',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  title: {
    content: 'My Application',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  links: [
    {
      content: 'Home',
      color: '#ffffff',
      fontSize: 16,
      url: '/',
    },
    {
      content: 'Profile',
      color: '#ffffff',
      fontSize: 16,
      url: '/profile',
    },
    {
      content: 'Settings',
      color: '#ffffff',
      fontSize: 16,
      url: '/settings',
    },
  ],
};

const sidebarData = {
  style: {
    backgroundColor: '#333333',
    width: 250,
    padding: 20,
    position: 'fixed', // or 'absolute' for collapsible
    top: 0,
    left: 0,
    height: '100%',
  },
  collapseStyle: {
    width: 60,
  },
  isCollapsible: true, // Whether the sidebar is collapsible
  menuItems: [
    {
      content: 'Dashboard',
      color: '#ffffff',
      fontSize: 16,
      icon: '📊', // Optional icon (can be an image link or unicode)
    },
    {
      content: 'Profile',
      color: '#ffffff',
      fontSize: 16,
      icon: '👤',
    },
    {
      content: 'Settings',
      color: '#ffffff',
      fontSize: 16,
      icon: '⚙️',
    },
    {
      content: 'Logout',
      color: '#ffffff',
      fontSize: 16,
      icon: '🚪',
    },
  ],
};

 const footerData = {
  style: {
    container: {
      backgroundColor: '#333',
      padding: 20,
      textAlign: 'center',
    },
    links: {
      marginBottom: 10,
    },
    copyrightColor: '#fff',
  },
  links: [
    { label: 'Home', url: '/home', color: '#00f' },
    { label: 'About', url: '/about', color: '#00f' },
    { label: 'Contact', url: '/contact', color: '#00f' },
  ],
  copyright: {
    text: '© 2024 Your App Name. All rights reserved.',
  },
};
const modalData = {
  style: {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignSelf: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    closeButton: {
      fontSize: 24,
      color: 'red',
    },
    body: {
      marginBottom: 20,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    button: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: 10,
      borderRadius: 5,
      marginLeft: 10,
    },
  },
  title: 'Modal Title',
  content: 'This is the content of the modal dialog.',
  actions: [
    {
      label: 'Close',
      onPress: () => console.log('Modal closed'),
    },
    {
      label: 'Save',
      onPress: () => console.log('Changes saved'),
    },
  ],
};


  export { containerData, gridData, cardData, navBarData, sidebarData, footerData, modalData };
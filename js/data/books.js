let BOOKS = {
    'B00001' : {
        name : 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
        author : 'Aurélien Géron',
        description : 'Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how.',
        cover : 'url(assets/images/books/b1.jpg)',
        available : false,
        borrowed_by : 'user@librasphere.com',
        overdue_fine: 10,
        eBook : false
    },
    'B00002' : {
        name : 'Practical Linear Algebra for Data Science',
        author : 'Mike X Cohen',
        description : "If you want to work in any computational or technical field, you need to understand linear algebra. As the study of matrices and operations acting upon them, linear algebra is the mathematical basis of nearly all algorithms and analyses implemented in computers. But the way it's presented in decades-old textbooks is much different from how professionals use linear algebra today to solve real-world modern applications.",
        cover : 'url(assets/images/books/b2.jpg)',
        available : false,
        borrowed_by : 'user@librasphere.com',
        overdue_fine: 10,
        eBook : false
    },
    'B00003' : {
        name : 'Programming PyTorch for Deep Learning',
        author : 'Ian Pointer',
        description : 'Take the next steps toward mastering deep learning, the machine learning method that’s transforming the world around us by the second. In this practical book, you’ll get up to speed on key ideas using Facebook’s open source PyTorch framework and gain the latest skills you need to create your very own neural networks.',
        cover : 'url(assets/images/books/b3.jpg)',
        available : false,
        borrowed_by : 'user@librasphere.com',
        overdue_fine: 15,
        eBook : false
    },
    'B00004' : {
        name : 'Mastering API Architecture',
        author : 'James Gough, Daniel Bryant, Matthew Auburn',
        description : "Most organizations with a web presence build and operate APIs; the doorway for customers to interact with the company's services. Designing, building, and managing these critical programs affect everyone in the organization, from engineers and product owners to C-suite executives. But the real challenge for developers and solution architects is creating an API platform from the ground up.",
        cover : 'url(assets/images/books/b4.jpg)',
        available : false,
        borrowed_by : 'thanuj@librasphere.com',
        overdue_fine: 10,
        eBook : false
    },
    'B00005' : {
        name : 'Essential Math for Data Science',
        author : 'Thomas Nield',
        description : "Master the math needed to excel in data science, machine learning, and statistics. In this book author Thomas Nield guides you through areas like calculus, probability, linear algebra, and statistics and how they apply to techniques like linear regression, logistic regression, and neural networks. Along the way you'll also gain practical insights into the state of data science and how to use those insights to maximize your career.",
        cover : 'url(assets/images/books/b5.jpg)',
        available : false,
        borrowed_by : 'thanilka@librasphere.com',
        overdue_fine: 10,
        eBook : false
    },
    'B00006' : {
        name : 'Microservice Architecture',
        author : 'Irakli Nadareishvili, Ronnie Mitra, Matt McLarty, Mike Amundsen',
        description : "Have you heard about the tremendous success Amazon and Netflix have had by switching to a microservice architecture? Are you wondering how this can benefit your company? Or are you skeptical about how it might work? If you’ve answered yes to any of these questions, this practical book will benefit you. You'll learn how to take advantage of the microservice architectural style for building systems, and learn from the experiences of others to adopt and execute this approach most successfully.",
        cover : 'url(assets/images/books/b6.jpg)',
        available : false,
        borrowed_by : 'thanuj@librasphere.com',
        overdue_fine: 15,
        eBook : false
    },

    'B00007' : {
        name : 'Introducing Python',
        author : 'Bill Lubanovic',
        description : 'Easy to understand and fun to read, this updated edition of Introducing Python is ideal for beginning programmers as well as those new to the language. Author Bill Lubanovic takes you from the basics to more involved and varied topics, mixing tutorials with cookbook-style code recipes to explain concepts in Python 3. End-of-chapter exercises help you practice what you’ve learned.',
        cover : 'url(assets/images/books/b7.jpg)',
        available : false,
        borrowed_by : 'asindu@librasphere.com',
        overdue_fine: 15,
        eBook : false
    },

    'B00008' : {
        name : 'Learning Java',
        author : 'Jonathan Knudsen, Patrick Niemeyer',
        description : "Part of O'Reilly's definitive set of Java documentation, Learning Java introduces the basics of Java, the object-oriented programming language for networked applications from Sun Microsystems. This book provides a broad survey of the Java 2 Standard Edition and contains everything necessary to get up to speed quickly. It covers the essentials of hot topics like Swing and JFC; describes new tools for signing applets and other Java classes; and shows how to write networked clients and servers, servlets, JavaBeans, and state-of-the-art user interfaces. Java started out as a tool for creating animated web pages, but it's proven to be much more. Java is now used for everything from sophisticated web clients to mission-critical enterprise applications. ",
        cover : 'url(assets/images/books/b8.jpg)',
        available : true,
        borrowed_by : null,
        overdue_fine: 10,
        eBook : false
    },

    'B00009' : {
        name : 'Client-Server Web Apps with JavaScript and Java',
        author : 'Casimir Saternos',
        description : 'As a Java programmer, how can you tackle the disruptive client-server approach to web development? With this comprehensive guide, you’ll learn how today’s client-side technologies and web APIs work with various Java tools. Author Casimir Saternos provides the big picture of client-server development, and then takes you through many practical client-server architectures. You’ll work with hands-on projects in several chapters to get a feel for the topics discussed.',
        cover : 'url(assets/images/books/b9.jpg)',
        available : true,
        borrowed_by : null,
        overdue_fine: 10,
        eBook : false
    },

    'B00010' : {
        name : 'Lightweight Django',
        author : 'Julia Solórzano, Mark Lavin',
        description : 'How can you take advantage of the Django framework to integrate complex client-side interactions and real-time features into your web applications? Through a series of rapid application development projects, this hands-on book shows experienced Django developers how to include REST APIs, WebSockets, and client-side MVC frameworks such as Backbone.js into new or existing projects.',
        cover : 'url(assets/images/books/b10.jpg)',
        available : true,
        borrowed_by : null,
        overdue_fine: 10,
        eBook : false
    },
    'B00011' : {
        name : 'Discrete Mathematics',
        author : 'Richard Johnsonbaugh',
        description : 'This book offers a concise introduction to essential topics like logic, set theory, combinatorics, graph theory, number theory, and algorithms. It covers foundational principles, provides illustrative examples, and includes exercises to reinforce understanding. Ideal for students and professionals, it bridges theoretical concepts with practical applications in computer science and mathematics.',
        cover : 'url(assets/images/books/b11.png)',
        available : true,
        borrowed_by : null,
        overdue_fine: 10,
        eBook : false
    },
}

const books_in_storage = get('books')

books_in_storage ? BOOKS = books_in_storage : post('books', BOOKS);

Wikit

📚 Wikit for the cricket fans, by cricket fans

## Description

📝

The project is a dynamic app that connects sports fans with similar interests through intelligent clustering algorithms. Its main objective is to create a vibrant community by facilitating discussions and interactions among fans who share a passion for the same sports team.

Using state-of-the-art unsupervised machine learning techniques, the app employs scikit-learn's powerful K-means clustering model. This allows the app to analyze user profiles, preferences, and engagement patterns to group fans into clusters based on their shared interests, team affiliations, and other relevant factors. By matching fans with the most compatible groups, the app fosters engaging conversations, enables the exchange of ideas and opinions, and creates a sense of belonging among users.

The app provides a dedicated chat room for each fan cluster, where users can actively participate in discussions, share news, cheer for their team, and express their enthusiasm. By connecting fans who have similar viewpoints, the app enhances the overall user experience and promotes meaningful connections within the sports community.

Additionally, the app offers a range of supplementary features to enhance the user's engagement. It provides comprehensive analytics, data visualizations, and performance graphs that highlight the team's progress and achievements over time. Users can also access targeted advertisements, enabling them to explore and purchase merchandise and tickets associated with their favorite team.

With its focus on intelligent clustering and fostering engaging discussions, this app provides a platform for sports fans to connect, share their passion, and create a vibrant community centered around their beloved sports team.

## Features

✨ List of key features:

* An app that connects fans of the same team together in a chat room.
* Utilizes an existing AI matchmaking algorithm to connect fans with the most similar profiles.
* Includes a page to display team support, analytics, data, and a graph of improvement over time.
* Offers merchandise and ticket advertisements for the supported team.
* Provides three tiers: Free, Basic, and Premium.
* Generates revenue through targeted advertisements, premium and pro tier subscriptions, and tournament sponsorships.

## Tech Stack

🔧 Technologies used in this project:

* Backend: Python, Flask
* Machine Learning: scikit-learn for unsupervised K-means clustering model
* Frontend: Tailwind CSS
* Database: Firebase with Firestore

## Run Backend

**Prerequisites:**

* Python 3.x installed on your machine
* pip package manager installed

**Step 1: Clone the repository**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone <repository-url>
</code></div></div></pre>

**Step 2: Install dependencies**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd <repository-directory>
pip install -r requirements.txt
</code></div></div></pre>

**Step 3: Set up Firebase and Firestore**

* Create a Firebase project and enable Firestore database.
* Obtain the Firebase configuration credentials.

**Step 4: Configure the Flask app**

* Open the `config.py` file in the project directory.
* Replace the placeholder values with your Firebase configuration credentials.

**Step 5: Run the Flask app**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">python app.py
</code></div></div></pre>

**Step 6: Access the app**
Open your web browser and visit `http://localhost:5000` to access the app locally.

Note: If the default port `5000` is already in use, you can specify a different port by modifying the `app.py` file.

That's it! You have successfully set up and run the project locally on your machine. You can now explore the app's features and interact with the chat room, leveraging the power of the intelligent clustering algorithm to connect with like-minded sports fans.

**Prerequisites:**

* Python 3.x installed on your machine
* pip package manager installed

**Step 1: Clone the repository**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone <repository-url>
</code></div></div></pre>

**Step 2: Install dependencies**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd <repository-directory>
pip install -r requirements.txt
</code></div></div></pre>

**Step 3: Set up Firebase and Firestore**

* Create a Firebase project and enable Firestore database.
* Obtain the Firebase configuration credentials.

**Step 4: Configure the Flask app**

* Open the `config.py` file in the project directory.
* Replace the placeholder values with your Firebase configuration credentials.

**Step 5: Run the Flask app**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">python app.py
</code></div></div></pre>

**Step 6: Access the app**
Open your web browser and visit `http://localhost:5000` to access the app locally.

Note: If the default port `5000` is already in use, you can specify a different port by modifying the `app.py` file.

That's it! You have successfully set up and run the project locally on your machine. You can now explore the app's features and interact with the chat room, leveraging the power of the intelligent clustering algorithm to connect with like-minded sports fans.

**Prerequisites:**

* Python 3.x installed on your machine
* pip package manager installed

**Step 1: Clone the repository**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone <repository-url>
</code></div></div></pre>

**Step 2: Install dependencies**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd <repository-directory>
pip install -r requirements.txt
</code></div></div></pre>

**Step 3: Set up Firebase and Firestore**

* Create a Firebase project and enable Firestore database.
* Obtain the Firebase configuration credentials.

**Step 4: Configure the Flask app**

* Open the `config.py` file in the project directory.
* Replace the placeholder values with your Firebase configuration credentials.

**Step 5: Run the Flask app**

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">python app.py
</code></div></div></pre>

**Step 6: Access the app**
Open your web browser and visit `http://localhost:5000` to access the app locally.

Note: If the default port `5000` is already in use, you can specify a different port by modifying the `app.py` file.

That's it! You have successfully set up and run the project locally on your machine. You can now explore the app's features and interact with the chat room, leveraging the power of the intelligent clustering algorithm to connect with like-minded sports fans.

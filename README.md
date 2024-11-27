# GitHub User Activity

A simple command-line interface (CLI) application to fetch and display the recent activity of a GitHub user using the GitHub API.

## Project Description

In this project, you will build a CLI tool that fetches the recent activity of a GitHub user and displays it in the terminal. This application allows users to:

- Provide a GitHub username as an argument.
- Fetch the recent activity from GitHub's API.
- Display the activity in a human-readable format in the terminal.

This project helps you practice your skills in working with APIs, handling JSON data, and building a simple command-line application.

## Features

- Fetch recent activity for any GitHub user.
- Display different types of activities, such as push events, issue creation, repository starring, etc.
- Gracefully handle errors like invalid usernames or API failures.

## Requirements

- **Node.js**: Ensure you have Node.js installed on your machine.
- **Command-line usage**: The program should be executed from the terminal and accept a GitHub username as an argument.

## How to Use

1. **Clone the repository:**

    ```bash
    git clone https://github.com/seifsheikhelarab/github-user-activity
    cd github-user-activity
    ```

2. **Install Globally**

   to run the tool, use the following command

   ```bash
    npm install -g .
    ```


3. **Run the CLI tool:**

    To fetch the activity of a specific GitHub user, use the following command:

    ```bash
    github-activity <username>
    ```

    Example:

    ```bash
    github-activity seifsheikhelarab
    ```

4. **Expected Output:**

    When the command is run successfully, the terminal will display recent activities of the user:

    ```
   Pushed 1 commits to seifsheikhelarab/BlogApp
   Pushed 1 commits to seifsheikhelarab/BlogApp
   Created a branch (main) in seifsheikhelarab/BlogApp
    ```

5. **Error Handling:**

    If the GitHub username is invalid or there is an issue with the API, the program will print an error message:

    ```
    Error: 404 - Not Found
    ```

## GitHub API

The application uses the following GitHub API endpoint to fetch the user’s activity:

```
GET https://api.github.com/users/<username>/events
```

For more details on GitHub's events API, check the official documentation: [GitHub Events API](https://developer.github.com/v3/activity/events/)

## Activities Supported

- **PushEvent**: Displays the number of commits pushed to a repository.
- **IssuesEvent**: Shows when an issue is opened, closed, or updated.
- **WatchEvent**: Shows when the user stars a repository.
- **ForkEvent**: Shows when the user forks a repository.
- **PullRequestEvent**: Displays actions on pull requests.
- **CreateEvent**: Shows when a repository, branch, or tag is created.

## Requirements

- **No external libraries**: This project does not use any external libraries like `axios` or `request`. It uses only Node.js’s built-in `https` module to make API requests.

## Contributing

Feel free to fork this repository and submit pull requests. If you find any bugs or have suggestions for improvement, feel free to open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
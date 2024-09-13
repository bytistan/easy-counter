# Timer & Cost Tracker Application

This application is a simple timer and cost tracker built with Electron. It helps users keep track of time and associated costs with an easy-to-use interface.

![App](https://github.com/user-attachments/assets/46824718-4344-4131-8978-bf0d01b38df5)

## Features

- **Timer:** Displays elapsed time in the format `MM:SS`.
- **Cost Calculation:** Shows the total cost based on the time tracked. The currency is in Turkish Lira (₺).
- **Controls:**
  - **Start/Pause Timer:** Control the timer by clicking the green play button.
  - **Settings:** Customize timer or cost settings via the gear icon.
  - **Exit:** Easily exit the app by clicking the red exit button.

## How It Works

1. The timer starts when you press the play button.
2. Time is displayed in minutes and seconds on the left side of the screen.
3. The right side shows the cost, which updates dynamically based on the elapsed time.
4. The cost per second can be adjusted in the settings.

## Installation

To get started with the application, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/findik-faresi/timer-cost-tracker.git
    ```

2. Navigate to the project folder:

    ```bash
    cd timer-cost-tracker
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

## Usage

- **Start/Stop the Timer:** Click the play button to start or stop the timer.
- **Adjust Settings:** Modify cost rate or timer settings by clicking the gear icon.
- **Track Costs:** The cost displayed on the right updates as time passes.

## Technologies

- [Electron](https://www.electronjs.org/) - Build cross-platform desktop apps using JavaScript, HTML, and CSS.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

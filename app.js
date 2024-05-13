from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/process', methods=['POST'])
def process_command():
    data = request.json
    command = data['command']
    
    # Process command here (e.g., using NLU, APIs, etc.)
    # Example:
    # response = process_command_using_nlu(command)

    response = "Response from Jarvis: Command received - " + command
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)

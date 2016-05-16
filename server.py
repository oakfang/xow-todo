from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

tasks = {'tasks': []}

@app.route('/tasks', methods=['PUT'])
def tasks_api():
    tasks['tasks'] = request.json['tasks']
    return jsonify(tasks)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path == 'tasks':
        return jsonify(tasks)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
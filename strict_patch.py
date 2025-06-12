def validate_output(output):
    if not isinstance(output, dict):
        raise ValueError("Output must be a dictionary.")
    if "result" not in output or "prompt" not in output:
        raise ValueError("Missing required output fields.")
    return True

def sync_to_api(endpoint, data):
    import requests
    try:
        response = requests.post(endpoint, json=data)
        return response.status_code, response.json()
    except Exception as e:
        return 500, {"error": str(e)}

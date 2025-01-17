#!/bin/bash

# Define the text file
TEXT_FILE="ports.txt"

# Check if the text file exists
if [[ ! -f $TEXT_FILE ]]; then
  echo "Text file not found!"
  exit 1
fi

# Read the text file line by line
while IFS=' ' read -r host port; do
  # Skip empty lines
  if [[ -z "$host" || -z "$port" ]]; then
    continue
  fi

  # Check connectivity to the host and port
  nc -zv -w 5 "$host" "$port" &> /dev/null
  if [[ $? -eq 0 ]]; then
    echo "Connection to $host on port $port succeeded."
  else
    echo "Connection to $host on port $port failed."
  fi
done < "$TEXT_FILE"
def extract_courses_by_roll_number(input_file):
    # Open the input file
    with open(input_file, 'r') as infile:
        roll_number = None  # Variable to store the current roll number
        output_file = None  # File handle for the output .ics file
        start_saving = False  # Flag to start saving after finding a roll number line

        # Read each line of the input file
        for line in infile:
            # If the line starts with '#', it means we found a new roll number
            if line.startswith('#'):
                # Extract the roll number from the line
                parts = line.split('Roll Number: ')
                if len(parts) > 1:
                    roll_number = parts[1].strip()  # Clean up the roll number
                    # Create a new .ics file for the current roll number
                    if roll_number:
                        if output_file:
                            output_file.close()  # Close the previous file
                        output_file = open(f"{roll_number}.ics", 'w')
                        start_saving = True
            elif start_saving:
                # If we have started saving, write the lines until the next '#' is found
                if line.startswith('#'):
                    start_saving = False
                else:
                    # Write the data as it is in .ics format
                    output_file.write(f"{line.strip()}\n")

        # Close the last file after processing all the lines
        if output_file:
            output_file.close()

# Example usage
input_file = 'output.txt'  # Replace with your file name
extract_courses_by_roll_number(input_file)

const SYLLABUS = [
  {
    id: 1,
    title: "Module 1: Basics, Selection Structures, and Iteration",
    topics: [
      {
        id: "m1t1",
        title: "Standard Number Algorithms (Prime, Armstrong, Factorial)",
        badge: "HIGH",
        summary: "Master standard number algorithms like Prime, Armstrong, and Factorial using Python loops and logic.",
        content: `
          <div class="module-intro">
            <p><strong>CST362 Programming in Python - Comprehensive Study Guide</strong></p>
            <p><em>Welcome. This module is the foundation of your Python journey. According to the PYQ analysis, Module 1 is highly predictable. The exam heavily favors algorithmic logic (Even slot) over pure theory (Odd slot). We will focus on mastering control structures and the mathematical algorithms that appear in every single paper.</em></p>
          </div>
          <hr>
          <h2>Topic 1: Standard Number Algorithms (Prime, Armstrong, Factorial)</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ REPEATED PYQ: Apr '25, May '24, Jun '22, May '23]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Before we can build complex software, we need to know how to solve basic mathematical puzzles using code. This involves using loops to repeat actions and <code>if-else</code> statements to make decisions. Standard number algorithms test your ability to break down a math problem into a sequence of logical steps that a computer can execute.</p>
          <blockquote>Think of a number algorithm like a recipe. If you want to check if a number is an "Armstrong" number, you can't just look at it. You have to slice the number into its individual ingredients (digits), cube each ingredient, and add them all together to see if the final cake matches the original recipe.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p>To solve these algorithms, you must master <strong>Indefinite Iteration (<code>while</code> loops)</strong> and <strong>Digit Extraction</strong>.</p>
          <ul>
            <li><strong>Digit Extraction Logic:</strong> In Python, to process a number digit by digit, we use the modulo <code>%</code> and integer division <code>//</code> operators inside a <code>while</code> loop.
              <ul>
                <li><code>digit = n % 10</code> extracts the last digit.</li>
                <li><code>n = n // 10</code> removes the last digit from the number.</li>
              </ul>
            </li>
            <li><strong>Prime Number Logic:</strong> A number greater than 1 is prime if it cannot be formed by multiplying two smaller natural numbers. We use a <code>for</code> loop to check divisibility from 2 up to the square root of the number.</li>
            <li><strong>Factorial Logic:</strong> The product of an integer and all the integers below it. Usually solved with a <code>for</code> loop accumulating a product.</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>1. Armstrong Number Checker</strong><br>
          An Armstrong number (of 3 digits) is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 153 = 1^3 + 5^3 + 3^3.</p>
          <pre><code class="language-python"># Step 1: Accept input
num = int(input("Enter a number: "))
sum_of_cubes = 0

# Step 2: Store original number to compare later
temp = num

# Step 3: Extract digits and compute sum of cubes
while temp > 0:
    digit = temp % 10        # Extract the last digit
    sum_of_cubes += digit ** 3 # Cube it and add to sum
    temp = temp // 10        # Remove the last digit

# Step 4: Compare and output
if num == sum_of_cubes:
    print(num, "is an Armstrong number")
else:
    print(num, "is not an Armstrong number")</code></pre>

          <p><strong>2. Prime Number Generator (Up to N)</strong></p>
          <pre><code class="language-python">lower = int(input("Enter lower limit: "))
upper = int(input("Enter upper limit: "))

print("Prime numbers between", lower, "and", upper, "are:")

for num in range(lower, upper + 1):
   # all prime numbers are greater than 1
   if num > 1:
       for i in range(2, int(num**0.5) + 1): # Check up to the square root for efficiency
           if (num % i) == 0:
               break # Not prime, exit the inner loop
       else:
           print(num, end=" ") # Executed if the loop completes without breaking</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> If asked to write a program, write the code directly. If asked to "Explain the logic", write 2-3 lines of text explaining the mathematical property before diving into the code.</li>
            <li><strong>Body:</strong> For Armstrong, the examiner is specifically looking for the <code>while temp > 0:</code> loop and the <code>temp % 10</code> logic. For Prime numbers, the examiner is checking your loop bounds (<code>range(2, n)</code> or <code>range(2, int(n**0.5)+1)</code>).</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Modifying Trap:</strong> In the Armstrong program, students often perform operations on <code>num</code> directly and then try to do <code>if num == sum</code>. Since <code>num</code> was reduced to <code>0</code> by the while loop, this always fails. ALWAYS use a <code>temp</code> variable.</li>
                <li><strong>The Prime Trap:</strong> 1 is NOT a prime number. Ensure your logic explicitly handles or skips 1.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Provide a quick trace of the output. E.g., "Output: Enter a number: 153 -> 153 is an Armstrong number."</li>
          </ul>
        `
      },
      {
        id: "m1t2",
        title: "Control & Selection Theory (Iteration & Conditionals)",
        badge: "MED",
        summary: "Understand how selection (if-else) and iteration (loops) structures control the flow of a Python program.",
        content: `
          <h2>Topic 2: Control & Selection Theory (Iteration & Conditionals)</h2>
          <p class="badge-info"><strong>[HIGH PROB | ↻ FREQUENT PART A & B MIX]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>A computer program normally executes line by line, from top to bottom. Control and selection structures allow the program to break this straight line. They allow the code to make decisions (branching) or repeat actions (looping). Without these, a computer would just be a very fast, very dumb calculator that can only do one thing once.</p>
          <blockquote>Imagine driving a car. A straight road is standard sequential execution. An intersection with a traffic light is a <strong>Selection Structure</strong> (if it's red, stop; else, go). A roundabout that you circle three times looking for an exit is an <strong>Iteration Structure</strong> (a loop).</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. Selection Structures (<code>if</code>, <code>elif</code>, <code>else</code>)</strong><br>
          These statements allow the computer to select an action based on the evaluation of a Boolean condition (True/False).</p>
          <ul>
            <li><strong>One-way (<code>if</code>):</strong> Executes a block of code only if the condition is True.</li>
            <li><strong>Two-way (<code>if-else</code>):</strong> Directs the computer to choose between two mutually exclusive alternative courses of action.</li>
            <li><strong>Multi-way (<code>if-elif-else</code>):</strong> Tests multiple conditions sequentially. Execution stops as soon as one condition evaluates to True.</li>
          </ul>

          <p><strong>2. Iteration Structures (Loops)</strong><br>
          Iteration means repeating a set of actions. Each repetition is called a "pass" or an "iteration".</p>
          <ul>
            <li><strong>Definite Iteration (<code>for</code> loop):</strong> Repeats an action a predefined number of times. In Python, this is usually achieved using the <code>range()</code> function or iterating over a sequence.
              <ul>
                <li>Syntax: <code>for &lt;variable&gt; in range(&lt;integer expression&gt;):</code></li>
              </ul>
            </li>
            <li><strong>Indefinite / Conditional Iteration (<code>while</code> loop):</strong> Performs an action <em>until</em> the program determines it needs to stop (when the continuation condition becomes False). It is an "entry-control" loop because the condition is tested at the top.
              <ul>
                <li>Syntax: <code>while &lt;condition&gt;:</code></li>
              </ul>
            </li>
          </ul>

          <p><strong>3. Loop Control Statements</strong></p>
          <ul>
            <li><code>break</code>: Instantly terminates the loop entirely, bypassing the continuation condition.</li>
            <li><code>continue</code>: Skips the rest of the code inside the current iteration and jumps back to the top of the loop to evaluate the condition again.</li>
          </ul>

          <p><strong>4. Short-Circuit / Lazy Evaluation</strong><br>
          Python uses short-circuit evaluation for logical operators (<code>and</code>, <code>or</code>). It stops evaluating an expression as soon as the final result is determined.</p>
          <ul>
            <li>In <code>A and B</code>, if <code>A</code> is False, Python knows the whole expression is False, so it never evaluates <code>B</code>.</li>
            <li>In <code>A or B</code>, if <code>A</code> is True, Python knows the whole expression is True, so it never evaluates <code>B</code>.</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Demonstrating Definite Iteration and Multi-way Selection</strong><br>
          Let's write a program that iterates through numbers 1 to 5 and categorizes them.</p>
          <pre><code class="language-python">for num in range(1, 6): # Definite iteration (1 to 5)
    if num == 3:        # Multi-way selection
        print("Found the middle number!")
    elif num % 2 == 0:
        print(num, "is an Even number")
    else:
        print(num, "is an Odd number")</code></pre>

          <p><strong>Demonstrating Indefinite Iteration with a Break</strong></p>
          <pre><code class="language-python">theSum = 0.0
while True: # Infinite loop setup
    data = input("Enter a number (or press Enter to quit): ")
    if data == "":
        break # Exit the loop if input is empty
    theSum += float(data)

print("The total sum is", theSum)</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Define the term clearly. For loops, state: "Iteration structures repeat a set of actions. There are two types: definite (for) and indefinite (while)."</li>
            <li><strong>Body:</strong> For an 8-mark theory question, you MUST provide the syntax for both <code>for</code> and <code>while</code> loops.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Indentation Trap:</strong> When writing Python syntax blocks in your answer sheet, physically draw spaces or use arrows to show indentation. The examiner will dock marks if your <code>if</code> and the code beneath it are on the same vertical margin.</li>
                <li><strong>Off-by-One Error:</strong> If explaining the <code>range(start, stop)</code> function, explicitly state that it stops at <code>stop - 1</code>. <code>range(1, 4)</code> produces 1, 2, 3.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Provide a 3-line example code snippet for whichever structure you just explained.</li>
          </ul>
        `
      },
      {
        id: "m1t3",
        title: "Number & Star Pattern Printing",
        badge: "MED",
        summary: "Master nested loops to print various geometric and numerical patterns on a 2D grid.",
        content: `
          <h2>Topic 3: Number & Star Pattern Printing</h2>
          <p class="badge-info"><strong>[HIGH PROB | ↻ REPEATS IN ODD SLOTS]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Pattern printing is a classic computer science exercise used to teach nested iteration. It requires visualizing a 2D grid and controlling the rows and columns using two separate loop variables.</p>
          <blockquote>Think of pattern printing like a typewriter. The "Outer Loop" is the carriage return—it moves the paper down to the next line. The "Inner Loop" represents the keys striking the paper—it prints the characters across the current line from left to right.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p>Pattern printing relies entirely on <strong>Nested Definite Iteration</strong>.</p>
          <ul>
            <li><strong>Outer Loop (<code>i</code>):</strong> Controls the number of rows.</li>
            <li><strong>Inner Loop (<code>j</code>):</strong> Controls the number of columns (the characters printed on a specific row). The limit of the inner loop is almost always mathematically dependent on the current value of the outer loop <code>i</code>.</li>
            <li><code>print(..., end=" ")</code>: By default, Python's <code>print()</code> function appends a newline character (<code>\\n</code>) at the end. To print multiple items on the <em>same</em> horizontal line (which is required for patterns), we must override this behavior by setting <code>end=" "</code>.</li>
            <li><code>print()</code>: An empty print statement is used at the end of the outer loop to force the cursor to the next line after the inner loop finishes printing the columns.</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a Python program to print the following pattern:</p>
          <pre><code>5 4 3 2 1
4 3 2 1
3 2 1
2 1
1</code></pre>

          <p><strong>Step-by-Step Logic:</strong></p>
          <ol>
            <li>We have 5 rows. We need an outer loop that counts down from 5 to 1.</li>
            <li>In row 5, the inner loop prints from 5 down to 1.</li>
            <li>In row 4, the inner loop prints from 4 down to 1.</li>
            <li>Therefore, the inner loop always starts at the current value of the outer row <code>i</code>, and counts down to 1.</li>
          </ol>

          <pre><code class="language-python"># Outer loop: Controls the rows (i goes 5, 4, 3, 2, 1)
for i in range(5, 0, -1):
    
    # Inner loop: Controls the columns. Starts at 'i', counts down to 1.
    for j in range(i, 0, -1):
        # Print the column number 'j', keep cursor on the same line
        print(j, end=" ")
        
    # After inner loop finishes, print a newline to move to the next row
    print()</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Do not write theory unless asked. Just write the code.</li>
            <li><strong>Body:</strong> Ensure your <code>range()</code> parameters are perfectly accurate. If you need to count backward, you MUST provide the third step argument as <code>-1</code>. e.g., <code>range(5, 0, -1)</code>.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The <code>end</code> parameter:</strong> The most common reason students lose marks here is forgetting <code>end=" "</code>. Without it, your pattern will just print in a single massive vertical line.</li>
                <li><strong>The empty <code>print()</code>:</strong> Students often forget to put the empty <code>print()</code> inside the outer loop, causing the next row to print on the same line as the previous one.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> No conclusion needed for a pure code question. Just ensure your indentation is unambiguous.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 2,
    title: "Module 2: Data Structures & String Processing",
    topics: [
      {
        id: "m2t1",
        title: "Dictionary Operations",
        badge: "HIGH",
        summary: "Learn how to use Python dictionaries for fast data access using key-value associations.",
        content: `
          <div class="module-intro">
            <p><strong>CST362 Programming in Python - Comprehensive Study Guide</strong></p>
            <p><em>Welcome to Module 2. In Python, data is rarely handled as single, isolated variables. We organize data into structures. According to our PYQ analysis, this module gives you a clear strategic choice. The exam almost always pairs complex string manipulation (like Caesar Cipher on the Odd side) against built-in Data Structures (Lists and Dictionaries on the Even side). We recommend focusing heavily on mastering the Even slot (Q14) to secure fast, reliable marks.</em></p>
          </div>
          <hr>
          <h2>Topic 1: Dictionary Operations</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ REPEATED PYQ: Jun '22, May '24, Apr '25]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Unlike a list where items are accessed by their numerical position (index 0, 1, 2), a Dictionary organizes information by <strong>association</strong>. It stores data in pairs: a "Key" and a "Value". You use the unique Key to instantly find its corresponding Value.</p>
          <blockquote>Think of a dictionary like a real-world phonebook. If you want to find Nathaniel's phone number, you don't start at page 1 and read every single entry until you reach him (that would be a List). Instead, you look up the exact name "Nathaniel" (the Key) to instantly find "351-7743" (the Value).</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p>A Python dictionary is an unordered, mutable collection of key-value pairs.</p>
          <ul>
            <li><strong>Syntax:</strong> Written enclosed in curly braces <code>{}</code>. Keys and values are separated by a colon <code>:</code>, and entries are separated by commas.
              <ul>
                <li>Example: <code>phone_book = {'Savannah': '476-3321', 'Nathaniel': '351-7743'}</code></li>
              </ul>
            </li>
            <li><strong>Properties of Keys:</strong> Keys MUST be unique and immutable (like strings, numbers, or tuples).</li>
            <li><strong>Adding/Updating Entries:</strong> Use the subscript operator <code>[]</code>.
              <ul>
                <li><code>dict[new_key] = new_value</code></li>
              </ul>
            </li>
            <li><strong>Removing Entries:</strong>
              <ul>
                <li><code>dict.pop(key)</code>: Removes the key and returns its value. Raises an error if the key doesn't exist (unless a default value is provided: <code>dict.pop(key, None)</code>).</li>
              </ul>
            </li>
            <li><strong>Accessing Values Safely:</strong>
              <ul>
                <li><code>dict.get(key, default)</code>: Returns the value for the key. If the key is missing, it returns the <code>default</code> value instead of crashing the program.</li>
              </ul>
            </li>
            <li><strong>Traversing (Looping):</strong>
              <ul>
                <li>By Keys: <code>for key in dict:</code></li>
                <li>By Items (Tuples): <code>for key, value in dict.items():</code></li>
              </ul>
            </li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a program to count how many times each character appears in a given string and store the count in a dictionary.</p>
          <pre><code class="language-python"># Step 1: Accept the input string
text = input("Enter a string: ")

# Step 2: Create an empty dictionary to store the frequencies
freq_dict = {}

# Step 3: Iterate through each character in the string
for char in text:
    
    # Step 4: Check if the character is already a key in the dictionary
    if char in freq_dict:
        # If it exists, increment its count (value) by 1
        freq_dict[char] += 1
    else:
        # If it's a new character, add it to the dictionary with a count of 1
        freq_dict[char] = 1

# Step 5: Display the final dictionary
print("Character frequencies:", freq_dict)</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Define it clearly: "A dictionary in Python is an unordered collection of data values, used to store data values like a map, which unlike other Data Types that hold only a single value as an element, Dictionary holds key:value pairs."</li>
            <li><strong>Body:</strong> When asked to write a program (like matching names to birthdays), always initialize an empty dictionary <code>my_dict = {}</code> first. Use a loop to populate it.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Access Trap:</strong> Never use <code>my_dict[key]</code> if you aren't 100% sure the key exists; it will throw a <code>KeyError</code>. Always use <code>if key in my_dict:</code> first, or use the <code>get()</code> method.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Write a quick example showing how to print the dictionary using <code>.items()</code>.</li>
          </ul>
        `
      },
      {
        id: "m2t2",
        title: "List Methods & Slicing",
        badge: "HIGH",
        summary: "Explore the flexibility of Python lists through slicing and built-in manipulation methods.",
        content: `
          <h2>Topic 2: List Methods & Slicing</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ REPEATED PYQ: Apr '25, Jun '22, May '23, May '24]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>A List is a sequence of data values called items or elements. Each item in a list is ordered by its position (index), starting from 0. Lists are highly flexible—they can grow, shrink, and hold mixed types of data.</p>
          <blockquote>Think of a list like a row of lockers in a school hallway. Each locker has a specific number printed on the front (the index: 0, 1, 2...). You can open any locker to see what's inside, you can put new things in, or take things out, but the locker numbers stay perfectly in order.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p>Lists are <strong>mutable</strong> (changeable) sequences enclosed in square brackets <code>[]</code>.</p>
          <p><strong>1. Slicing</strong><br>
          Slicing extracts a sublist from the main list.</p>
          <ul>
            <li>Syntax: <code>&lt;list&gt;[&lt;start&gt; : &lt;stop&gt; : &lt;step&gt;]</code></li>
            <li>It extracts elements from <code>start</code> up to, but NOT including, <code>stop</code>.</li>
            <li>Example: If <code>L = [10, 20, 30, 40, 50]</code>, then <code>L[1:4]</code> returns <code>[20, 30, 40]</code>.</li>
          </ul>

          <p><strong>2. Essential Built-in Methods</strong></p>
          <ul>
            <li><strong>Adding Elements:</strong>
              <ul>
                <li><code>L.append(element)</code>: Adds one element to the exact end of the list.</li>
                <li><code>L.extend(aList)</code>: Merges another list onto the end of the current list.</li>
                <li><code>L.insert(index, element)</code>: Inserts an element at a specific position.</li>
              </ul>
            </li>
            <li><strong>Removing Elements:</strong>
              <ul>
                <li><code>L.pop([index])</code>: Removes and returns the element at the given index. If no index is provided, it pops the very last element.</li>
                <li><code>L.remove(element)</code>: Removes the <em>first occurrence</em> of the specified element.</li>
              </ul>
            </li>
            <li><strong>Utility:</strong>
              <ul>
                <li><code>L.sort()</code>: Sorts the list in ascending order (mutates the original list).</li>
                <li><code>L.index(element)</code>: Returns the index position of the element.</li>
              </ul>
            </li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a Python program to read N integers into a list and separate the positive and negative numbers into two different lists.</p>
          <pre><code class="language-python"># Step 1: Initialize the three required lists
main_list = []
positive_list = []
negative_list = []

# Step 2: Read N elements
n = int(input("Enter number of elements: "))
for i in range(n):
    val = int(input("Enter integer: "))
    main_list.append(val)

# Step 3: Traverse the main list and separate
for num in main_list:
    if num >= 0:
        positive_list.append(num)
    else:
        negative_list.append(num)

# Step 4: Display results
print("Original List:", main_list)
print("Positive List:", positive_list)
print("Negative List:", negative_list)</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> If it's a theory question, define a list as a "mutable, ordered sequence of elements accessed via zero-based indexing."</li>
            <li><strong>Body:</strong> For programming questions, explicitly show the initialization of empty lists <code>[]</code> before your loops. Use <code>.append()</code> heavily, as it's the safest way to build lists dynamically based on <code>if</code> conditions.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Slicing Trap:</strong> <code>L[0:2]</code> returns exactly 2 elements (index 0 and 1). It does NOT include index 2.</li>
                <li><strong>The Search Trap:</strong> The <code>.index(target)</code> method throws an error if the target isn't found. Always write <code>if target in L:</code> before calling <code>.index()</code>.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Show the output trace.</li>
          </ul>
        `
      },
      {
        id: "m2t3",
        title: "Caesar Cipher Encryption",
        badge: "MED",
        summary: "Implement basic text encryption using the Caesar Cipher algorithm and ASCII manipulation.",
        content: `
          <h2>Topic 3: Caesar Cipher Encryption</h2>
          <p class="badge-info"><strong>[HIGH PROB | ↻ REPEATED PYQ: Apr '25, May '23]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Data traveling on networks is vulnerable to spies. Encryption translates plaintext into a secret code (ciphertext). A Caesar Cipher is one of the oldest and simplest encryption methods. It takes every letter in a message and shifts it a certain number of places down the alphabet.</p>
          <blockquote>Imagine a secret decoder ring with two alphabet wheels. If you set the "shift" to 3, then 'a' becomes 'd', 'b' becomes 'e', and so on. If you reach the end of the alphabet ('z'), you just wrap back around to the start ('c').</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p>To implement a Caesar cipher in Python, we don't use a physical ring; we use the underlying ASCII numeric codes of characters.</p>
          <ul>
            <li><code>ord(character)</code>: Converts a single character into its integer ASCII value. (e.g., <code>ord('a')</code> is 97).</li>
            <li><code>chr(integer)</code>: Converts an integer ASCII value back into a character. (e.g., <code>chr(97)</code> is 'a').</li>
          </ul>

          <p><strong>The Mathematical Wrap-Around Logic:</strong><br>
          Because the alphabet loops back around (after 'z' comes 'a'), we cannot just add the shift distance blindly. We must use the modulo operator <code>% 26</code>.</p>
          <ol>
            <li>Convert the character to a 0-25 scale: <code>ord(char) - ord('a')</code></li>
            <li>Add the shift distance: <code>+ distance</code></li>
            <li>Wrap it around the 26 letters: <code>% 26</code></li>
            <li>Convert it back to the ASCII scale: <code>+ ord('a')</code></li>
          </ol>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a program to implement Caesar cipher encryption and decryption for a lowercase string.</p>
          <pre><code class="language-python">def encrypt(text, distance):
    cipher_text = ""
    for char in text:
        # Ensure it's a lowercase letter before shifting
        if 'a' <= char <= 'z':
            # Apply the mathematical shift formula
            shifted_ascii = (ord(char) - ord('a') + distance) % 26 + ord('a')
            cipher_text += chr(shifted_ascii)
        else:
            # If it's a space or punctuation, don't shift it
            cipher_text += char
    return cipher_text

def decrypt(cipher_text, distance):
    plain_text = ""
    for char in cipher_text:
        if 'a' <= char <= 'z':
            # Subtract the distance to reverse the shift
            shifted_ascii = (ord(char) - ord('a') - distance) % 26 + ord('a')
            plain_text += chr(shifted_ascii)
        else:
            plain_text += char
    return plain_text

# Example Usage
message = input("Enter lowercase message: ")
dist = int(input("Enter distance: "))

encrypted = encrypt(message, dist)
print("Encrypted:", encrypted)
print("Decrypted:", decrypt(encrypted, dist))</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Define the cipher: "A Caesar cipher replaces each character in plaintext with a character that occurs a given distance away in the sequence, wrapping around to the beginning if necessary."</li>
            <li><strong>Body:</strong> You MUST write the core formula clearly in your code. The examiner is scanning exactly for <code>(ord(char) - ord('a') + distance) % 26 + ord('a')</code>. If you try to write 26 massive <code>if</code> statements, you will run out of time and likely lose marks.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Hardcode Trap:</strong> Students often hardcode <code>97</code> instead of <code>ord('a')</code>. While <code>97</code> works for lowercase, using <code>ord('a')</code> shows the examiner you actually understand the logic.</li>
                <li><strong>The Punctuation Trap:</strong> Remember to handle spaces or numbers by just passing them through unchanged.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Provide a clear input/output example showing the shift working.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 3,
    title: "Module 3: Graphics, Image Processing, and GUI",
    topics: [
      {
        id: "m3t1",
        title: "Turtle Graphics (Drawing Polygons)",
        badge: "HIGH",
        summary: "Draw complex geometric shapes and polygons using the Python Turtle library.",
        content: `
          <div class="module-intro">
            <p><strong>CST362 Programming in Python - Comprehensive Study Guide</strong></p>
            <p><em>Welcome to Module 3. This module introduces you to three distinct external libraries: <code>turtle</code> for vector graphics, <code>images</code> (or <code>PIL</code>) for pixel manipulation, and <code>tkinter</code> for Graphical User Interfaces. According to our PYQ analysis, this module has a "Golden Overlap": Image Processing appears constantly. We strongly advise focusing on the Odd slot (Turtle + Image Processing), as writing full Tkinter GUI code (Even slot) under time pressure is a massive trap.</em></p>
          </div>
          <hr>
          <h2>Topic 1: Turtle Graphics (Drawing Polygons)</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ REPEATED PYQ: Apr '25, May '24, May '23, Jun '22]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Turtle graphics is a popular way to introduce programming to beginners. It was originally part of the Logo programming language in the 1960s.</p>
          <blockquote>Imagine a robotic turtle sitting in the exact center of a giant sheet of paper, holding a pen attached to its tail. You give the turtle simple commands like "move forward 50 steps," "turn right 90 degrees," and "put the pen down." By combining these simple instructions, you can draw complex geometric shapes.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p>Turtle graphics use a standard Cartesian coordinate system <code>(x, y)</code> with the origin <code>(0, 0)</code> at the center of the window (known as "home").</p>
          <p><strong>1. Core Objects:</strong></p>
          <ul>
            <li><strong>Turtle Object:</strong> The pen/cursor that moves on the screen (<code>t = turtle.Turtle()</code>).</li>
            <li><strong>Screen Object:</strong> The window associated with the turtle (<code>t.screen</code>).</li>
            <li><strong>Canvas:</strong> The actual drawing area within the window.</li>
          </ul>
          <p><strong>2. Essential Turtle Methods:</strong></p>
          <ul>
            <li><strong>Movement:</strong>
              <ul>
                <li><code>t.forward(distance)</code>: Moves the turtle forward in the current direction.</li>
                <li><code>t.goto(x, y)</code>: Moves the turtle to the specified absolute coordinates.</li>
              </ul>
            </li>
            <li><strong>Orientation:</strong>
              <ul>
                <li><code>t.right(degrees)</code> / <code>t.left(degrees)</code>: Rotates the turtle from its current heading.</li>
                <li><code>t.setheading(degrees)</code>: Points the turtle in an absolute direction (0 = East, 90 = North).</li>
              </ul>
            </li>
            <li><strong>Pen Control:</strong>
              <ul>
                <li><code>t.up()</code>: Lifts the pen (moves without drawing).</li>
                <li><code>t.down()</code>: Lowers the pen (draws while moving).</li>
                <li><code>t.width(pixels)</code>: Changes the thickness of the line.</li>
              </ul>
            </li>
            <li><strong>Colors & Shapes:</strong>
              <ul>
                <li><code>t.pencolor("color")</code>: Changes the line color.</li>
                <li><code>t.fillcolor("color")</code>: Changes the color used to fill shapes.</li>
                <li><code>t.begin_fill()</code> / <code>t.end_fill()</code>: Encloses a set of drawing commands to create a solid colored shape.</li>
                <li><code>t.hideturtle()</code>: Makes the turtle icon invisible to speed up drawing or hide the cursor.</li>
              </ul>
            </li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a Python program to draw a hexagon and fill it with color.</p>
          <p><strong>Mathematical Logic for Polygons:</strong><br>
          To draw any regular polygon, the turtle must turn by an angle equal to <code>360 / number_of_sides</code>.</p>
          <ul>
            <li>Square: <code>360 / 4 = 90</code> degrees.</li>
            <li>Hexagon: <code>360 / 6 = 60</code> degrees.</li>
            <li>Star (5-point): <code>144</code> degrees.</li>
          </ul>

          <pre><code class="language-python">import turtle

def draw_hexagon():
    # Step 1: Create the turtle object
    t = turtle.Turtle()
    
    # Step 2: Set colors and begin fill process
    t.pencolor("black")
    t.fillcolor("green")
    t.begin_fill()
    
    # Step 3: Draw the 6 sides using a loop
    for i in range(6):
        t.forward(100) # Move forward 100 pixels
        t.left(60)     # Turn left by 360/6 = 60 degrees
        
    # Step 4: Complete the fill and hide the turtle
    t.end_fill()
    t.hideturtle()
    
    # Step 5: Keep the window open (Crucial for exams!)
    turtle.done()

# Execute the function
draw_hexagon()</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Always start with <code>import turtle</code> and initializing the object <code>t = turtle.Turtle()</code>.</li>
            <li><strong>Body:</strong> Use a <code>for</code> loop. Do not write <code>t.forward()</code> and <code>t.right()</code> 6 separate times. The examiner wants to see you use iteration.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Polygon Angle Trap:</strong> Students often confuse interior angles with exterior turn angles. A hexagon has 120-degree interior angles, but the turtle must turn <em>60 degrees</em> relative to its current straight path. Always use <code>360/n</code>.</li>
                <li><strong>The Window Closing Trap:</strong> Programs without <code>turtle.done()</code> or <code>screen.mainloop()</code> will instantly close the window upon finishing. Mentioning this method shows practical knowledge.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Provide a small sketch of the expected output next to your code.</li>
          </ul>
        `
      },
      {
        id: "m3t2",
        title: "Image Processing (Pixels & Filters)",
        badge: "HIGH",
        summary: "Manipulate digital images at the pixel level to apply filters like grayscale and blurring.",
        content: `
          <h2>Topic 2: Image Processing (Pixels & Filters)</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ GOLDEN OVERLAP: Appears in Both Odd and Even Slots]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>A digital image is just a massive grid of tiny colored squares called "pixels" (picture elements). Image processing is the mathematical manipulation of these pixels to enhance or alter the image.</p>
          <blockquote>Think of an image as a giant mosaic made of thousands of tiny colored tiles. If you want to make the image "grayscale" (black and white), you look at every single tile one by one, calculate the average brightness of its colors, and replace it with a gray tile of that exact brightness.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. The RGB System & Digital Representation:</strong></p>
          <ul>
            <li>An image is defined as a two-dimensional function <code>F(x,y)</code>, where <code>x</code> and <code>y</code> are spatial coordinates.</li>
            <li>The coordinate system starts at <code>(0, 0)</code> in the <strong>upper-left corner</strong> (unlike standard math graphs).</li>
            <li>Each pixel contains a color value represented as a tuple of Red, Green, and Blue <code>(R, G, B)</code>.</li>
            <li>Each color channel ranges from <code>0</code> (total absence) to <code>255</code> (maximum saturation). E.g., <code>(0, 0, 0)</code> is Black, <code>(255, 255, 255)</code> is White.</li>
          </ul>
          <p><strong>2. Basic Image Operations (via the custom <code>images</code> module or standard <code>PIL/Pillow</code>):</strong></p>
          <ul>
            <li><strong>Loading:</strong> <code>Image("filename.gif")</code> or <code>Image.open()</code>.</li>
            <li><strong>Pixel Access:</strong> <code>image.getPixel(x, y)</code> returns the <code>(R, G, B)</code> tuple.</li>
            <li><strong>Pixel Modification:</strong> <code>image.setPixel(x, y, (r, g, b))</code> changes the color.</li>
            <li><strong>Dimensions:</strong> <code>image.getWidth()</code> and <code>image.getHeight()</code>.</li>
          </ul>
          <p><strong>3. Common Image Algorithms:</strong></p>
          <ul>
            <li><strong>Black and White:</strong> Calculate the average <code>(R+G+B)/3</code>. If average <code>&lt; 128</code>, set to Black <code>(0,0,0)</code>. Else, set to White <code>(255,255,255)</code>.</li>
            <li><strong>Grayscale:</strong> Apply luminance weighting instead of a simple average to account for human eye sensitivity: <code>Lum = R*0.299 + G*0.587 + B*0.114</code>.</li>
            <li><strong>Blurring:</strong> Mitigates rough, jagged edges (pixilation). The algorithm resets each pixel's color to the average of the colors of the surrounding neighboring pixels.</li>
            <li><strong>Edge Detection:</strong> Detects sharp boundaries by examining adjacent pixels. If the difference in their luminance exceeds a threshold, an edge is detected and the pixel is set to black; otherwise, it is set to white.</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a Python program to convert a color image to Grayscale.</p>
          <pre><code class="language-python"># Note: Using the standard PIL (Pillow) library logic as it is widely accepted
from PIL import Image

def convert_to_grayscale(filename):
    # Step 1: Open the original image
    original_img = Image.open(filename)
    
    # Step 2: Get dimensions
    width, height = original_img.size
    
    # Step 3: Create a blank image to hold the grayscale result
    gray_img = Image.new("RGB", (width, height))
    
    # Step 4: Nested loops for Row-Major traversal (visit every pixel)
    for y in range(height):
        for x in range(width):
            
            # Step 5: Get current RGB values
            r, g, b = original_img.getpixel((x, y))
            
            # Step 6: Calculate weighted luminance for grayscale
            # Using standard weights: Red=0.299, Green=0.587, Blue=0.114
            lum = int(r * 0.299 + g * 0.587 + b * 0.114)
            
            # Step 7: Set the new pixel (R, G, B must be identical for gray)
            gray_img.putpixel((x, y), (lum, lum, lum))
            
    # Step 8: Save or show the result
    gray_img.show()

# Execute
convert_to_grayscale("my_photo.jpg")</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Define what an image is: "A digital image is a two-dimensional grid of pixels, where each pixel is represented by an RGB tuple."</li>
            <li><strong>Body:</strong> For programming questions, you MUST demonstrate the nested <code>for</code> loops (<code>for y in range(height): for x in range(width):</code>). This proves you understand "Row-Major Traversal".</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Coordinate Trap:</strong> Remember that image processing libraries use <code>(x, y)</code> where <code>x</code> is the column (width) and <code>y</code> is the row (height).</li>
                <li><strong>The Grayscale Trap:</strong> A simple average <code>(R+G+B)/3</code> is technically wrong for true grayscale (though sometimes accepted for simple Black & White conversions). Use the luminance weights (<code>0.299</code>, <code>0.587</code>, <code>0.114</code>) to guarantee full marks.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Mention that this process alters the arrangement and information of the pixels to achieve visual enhancement.</li>
          </ul>
        `
      },
      {
        id: "m3t3",
        title: "Graphical User Interfaces (Tkinter)",
        badge: "HIGH",
        summary: "Build interactive desktop applications using the Tkinter library and event-driven programming.",
        content: `
          <h2>Topic 3: Graphical User Interfaces (Tkinter)</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ REPEATS IN EVEN SLOTS]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Unlike a terminal program where the computer asks you questions one by one in a strict sequence, a GUI (Graphical User Interface) presents a visual window with buttons, text boxes, and menus. It waits for the user to interact with it.</p>
          <blockquote>Think of a terminal program like a fast-food drive-thru speaker—you must answer the questions in the exact order they are asked. A GUI is like walking into a buffet—you can look at all the options, click on the salad bar, then jump to the dessert section, and hit "Checkout" whenever you are ready. This is called <strong>Event-Driven Programming</strong>.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. Event-Driven Programming Characteristics:</strong></p>
          <ul>
            <li>Programs are inactive until the user interacts with GUI components.</li>
            <li>Inputs can be entered in any order.</li>
            <li>Results can be recalculated with different data without restarting the program.</li>
          </ul>
          <p><strong>2. Standard Widgets (Components):</strong></p>
          <ul>
            <li><code>Label</code>: Displays text or images.</li>
            <li><code>Entry</code> / <code>TextField</code>: A single-line box for user input.</li>
            <li><code>Button</code>: A clickable command area that triggers a function when pressed.</li>
            <li><code>Text</code> / <code>TextArea</code>: A scrollable box for multi-line text.</li>
          </ul>
          <p><strong>3. Layout Management (Grid):</strong></p>
          <ul>
            <li>Components are placed in a 2D grid.</li>
            <li><code>row</code> and <code>column</code> arguments specify the position.</li>
            <li><code>columnspan</code> and <code>rowspan</code> allow a widget to stretch across multiple cells.</li>
            <li><code>sticky</code> controls alignment within the cell (N, S, E, W for compass directions).</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a GUI program that takes user input for the radius of a circle, and when a button is pressed, calculates and displays the Area.</p>
          <p><em>Note: The official notes use a custom wrapper called <code>breezypythongui</code>. However, standard <code>tkinter</code> is universally accepted and often safer to use in KTU exams.</em></p>

          <pre><code class="language-python">import tkinter as tk
import math

# Step 1: Define the event handler function
def calculate_area():
    try:
        # Get data from entry field and convert to float
        radius = float(radius_entry.get())
        
        # Calculate area
        area = math.pi * (radius ** 2)
        
        # Update the result label
        result_label.config(text=f"Area: {area:.2f}")
    except ValueError:
        # Handle invalid input (like letters instead of numbers)
        result_label.config(text="Error: Invalid Input")

# Step 2: Create the main window
window = tk.Tk()
window.title("Circle Area Calculator")

# Step 3: Create and place the Radius Label and Entry (Row 0)
tk.Label(window, text="Enter Radius:").grid(row=0, column=0, padx=10, pady=10)
radius_entry = tk.Entry(window)
radius_entry.grid(row=0, column=1, padx=10, pady=10)

# Step 4: Create and place the Command Button (Row 1, spanning 2 columns)
calc_btn = tk.Button(window, text="Compute Area", command=calculate_area)
calc_btn.grid(row=1, column=0, columnspan=2, pady=10)

# Step 5: Create and place the Result Label (Row 2, spanning 2 columns)
result_label = tk.Label(window, text="Area: 0.0")
result_label.grid(row=2, column=0, columnspan=2, pady=10)

# Step 6: Start the Event Loop
window.mainloop()</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Define Event-Driven programming briefly if asked.</li>
            <li><strong>Body:</strong> Writing GUI code is long. Follow a strict sequence: Import -> Define calculation function -> Create Window -> Add Label -> Add Entry -> Add Button -> Start <code>mainloop()</code>.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Command Trap:</strong> When creating a button, <code>command=calculate_area</code> is correct. DO NOT write <code>command=calculate_area()</code>. Adding the parentheses calls the function instantly when the button is created, rather than waiting for the click event.</li>
                <li><strong>The Data Extraction Trap:</strong> Data pulled from an <code>Entry</code> widget is always a string. You MUST convert it using <code>int()</code> or <code>float()</code> before doing math on it.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Always ensure your code ends with <code>window.mainloop()</code>. Without this, the GUI will flash and disappear instantly.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 4,
    title: "Module 4: Object-Oriented Programming & Exceptions",
    topics: [
      {
        id: "m4t1",
        title: "Exception Handling (Resilience)",
        badge: "HIGH",
        summary: "Learn to handle runtime errors gracefully using Python's try-except-finally blocks.",
        content: `
          <div class="module-intro">
            <p><strong>CST362 Programming in Python - Comprehensive Study Guide</strong></p>
            <p><em>Welcome to Module 4. This module shifts focus from procedural scripts to Object-Oriented Programming (OOP) and code resilience. According to our PYQ analysis, this module contains the absolute highest predictability in the entire syllabus: Exception Handling. By mastering the <code>try-except</code> lifecycle and the <code>ABC</code> module, you can confidently secure the Even slot (Q18) marks every time.</em></p>
          </div>
          <hr>
          <h2>Topic 1: Exception Handling (Resilience)</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ EXACT REPEAT IN ALL 4 PAPERS]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Even perfectly written code can crash if it encounters something unexpected from the outside world—like a user typing a letter when asked for a number, or trying to divide a number by zero. Instead of letting the program instantly die (crash), Python allows us to "catch" these errors, handle them gracefully, and keep the program running. This process is called Exception Handling.</p>
          <blockquote>Think of a program like an airplane in flight. A syntax error is a missing wing—the plane can never take off. An exception is a bird striking the engine mid-flight. If the plane doesn't have an emergency protocol (an Exception Handler), it crashes. If it does, the pilot can safely divert the plane to the nearest runway and save the passengers.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p>An exception is an event that disrupts the normal flow of the program's instructions.</p>
          <p><strong>1. The Exception Lifecycle Blocks:</strong></p>
          <ul>
            <li><code>try</code>: This block encloses the code that might raise an exception. Python monitors this block for errors.</li>
            <li><code>except</code>: If an error occurs in the <code>try</code> block, execution immediately jumps to this block. You specify the <em>type</em> of exception you want to catch here.</li>
            <li><code>else</code>: (Optional) This block executes <em>only</em> if the <code>try</code> block completed successfully without raising any exceptions.</li>
            <li><code>finally</code>: (Optional) This block <em>always</em> executes, regardless of whether an exception was raised or not. It is typically used for cleanup actions (like closing files or network connections).</li>
          </ul>
          <p><strong>2. Common Built-in Exceptions to Memorise:</strong></p>
          <ul>
            <li><code>ValueError</code>: Raised when a function receives an argument of the right type but an inappropriate value (e.g., <code>int("apple")</code>).</li>
            <li><code>ZeroDivisionError</code>: Raised when dividing by zero.</li>
            <li><code>FileNotFoundError</code>: Raised when trying to open a file that doesn't exist.</li>
            <li><code>TypeError</code>: Raised when an operation is applied to an object of an inappropriate type (e.g., adding a string to an integer).</li>
          </ul>
          <p><strong>3. Raising Exceptions Forcefully:</strong></p>
          <ul>
            <li>You can manually trigger an exception using the <code>raise</code> keyword (e.g., <code>raise ValueError("Invalid age")</code>).</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> What are exceptions? How does Python catch them? Illustrate with a program that handles multiple exceptions.</p>
          <pre><code class="language-python"># A robust division calculator
def safe_divide():
    try:
        # Code that might crash
        num = int(input("Enter numerator: "))
        den = int(input("Enter denominator: "))
        result = num / den
        
    except ValueError:
        # Catches cases where user types letters instead of numbers
        print("Error: Please enter valid integers only.")
        
    except ZeroDivisionError:
        # Catches division by zero
        print("Error: Cannot divide by zero. The universe will implode.")
        
    else:
        # Runs ONLY if the try block succeeded
        print(f"Success! The result is {result}")
        
    finally:
        # Runs no matter what happens
        print("Division operation concluded. Thank you.")

# Execute
safe_divide()</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> "An exception is an error that occurs during the execution of a program, disrupting the normal flow of instructions. Python catches these using the try-except-else-finally blocks."</li>
            <li><strong>Body:</strong> Do not just write the code. You MUST explain what each block (<code>try</code>, <code>except</code>, <code>finally</code>) does. The examiner is specifically looking for the definition of the <code>finally</code> block to prove you understand the full lifecycle.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Bare Except Trap:</strong> Do not write a bare <code>except:</code> clause without specifying the error type (like <code>except ValueError:</code>). While Python allows it, it's considered terrible practice because it catches everything, including system exit signals. Mentioning specific errors shows deep knowledge.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Provide the exact example above. It is compact and demonstrates handling two different specific errors, which guarantees full marks.</li>
          </ul>
        `
      },
      {
        id: "m4t2",
        title: "Abstract Classes & Methods",
        badge: "HIGH",
        summary: "Define blueprints for code using Abstract Base Classes (ABC) and mandatory method implementation.",
        content: `
          <h2>Topic 2: Abstract Classes & Methods</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ REPEATED PYQ: Jun '22, May '24]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>An abstract class is a blueprint for other classes. It allows you to define a set of methods that <em>must</em> be created within any child classes built from the abstract class. However, the abstract class itself cannot be instantiated (you cannot create a direct object from it).</p>
          <blockquote>Imagine a blueprint for a "Vehicle". The blueprint states that every vehicle MUST have a <code>move()</code> method. However, you can't go to a dealership and buy a generic "Vehicle". You can only buy a "Car" or a "Bicycle" (the subclasses). The abstract class forces the Car and Bicycle to explain exactly <em>how</em> they move.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. The <code>abc</code> Module:</strong></p>
          <ul>
            <li>Python does not support abstract classes natively in its core syntax. We must import the <code>ABC</code> (Abstract Base Class) meta-class and the <code>@abstractmethod</code> decorator from the built-in <code>abc</code> module.
              <ul>
                <li><code>from abc import ABC, abstractmethod</code></li>
              </ul>
            </li>
          </ul>
          <p><strong>2. Key Rules:</strong></p>
          <ul>
            <li>A class that inherits from <code>ABC</code> and contains at least one <code>@abstractmethod</code> becomes an abstract class.</li>
            <li>You <strong>cannot</strong> create an object (instantiate) an abstract class. (<code>v = Vehicle()</code> will throw an error).</li>
            <li>Any child class that inherits from the abstract class <strong>must</strong> implement all the abstract methods. If it doesn't, Python will throw an error when you try to instantiate the child class.</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Create an Abstract Base Class called <code>Shape</code> with abstract methods <code>area()</code> and <code>perimeter()</code>. Derive <code>Rectangle</code> and <code>Circle</code> classes from it and implement the methods.</p>
          <pre><code class="language-python">from abc import ABC, abstractmethod
import math

# Step 1: Define the Abstract Base Class
class Shape(ABC):
    
    # Step 2: Define abstract methods (no implementation needed)
    @abstractmethod
    def area(self):
        pass
        
    @abstractmethod
    def perimeter(self):
        pass

# Step 3: Create a concrete subclass
class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width
        
    # MUST implement area
    def area(self):
        return self.length * self.width
        
    # MUST implement perimeter
    def perimeter(self):
        return 2 * (self.length + self.width)

# Step 4: Create another concrete subclass
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
        
    def area(self):
        return math.pi * (self.radius ** 2)
        
    def perimeter(self):
        return 2 * math.pi * self.radius

# Execution
# s = Shape() # This would cause an Error!
rect = Rectangle(10, 5)
print("Rectangle Area:", rect.area())

circ = Circle(7)
print("Circle Area:", circ.area())</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Explicitly state the two rules: "1. Abstract classes cannot be instantiated. 2. Subclasses must implement all abstract methods."</li>
            <li><strong>Body:</strong> Write the code clearly. You absolutely MUST include the import statement <code>from abc import ABC, abstractmethod</code>. Without this, the code is invalid. Ensure you pass <code>ABC</code> into the parent class definition: <code>class Shape(ABC):</code>.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Decorator Trap:</strong> Forgetting the <code>@abstractmethod</code> decorator above the methods in the parent class. If you forget this, it's just a normal class.</li>
                <li><strong>The Constructor Trap:</strong> Do not forget the <code>__init__</code> constructor in your subclasses to accept the dimensions (length, width, radius).</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Note at the bottom of your code that attempting to do <code>obj = Shape()</code> will raise a <code>TypeError</code>.</li>
          </ul>
        `
      },
      {
        id: "m4t3",
        title: "OOP Fundamentals (Inheritance, Polymorphism, Constructors)",
        badge: "MED",
        summary: "Understand the core pillars of OOP: Inheritance, Polymorphism, and Encapsulation through Python classes.",
        content: `
          <h2>Topic 3: OOP Fundamentals (Inheritance, Polymorphism, Constructors)</h2>
          <p class="badge-info"><strong>[HIGH PROB | ↻ CORE KNOWLEDGE FOR Q17]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Object-Oriented Programming (OOP) is a paradigm based on "objects" that contain data (attributes) and code (methods).</p>
          <blockquote>Imagine a Factory. The "Class" is the blueprint for a robot. The "Object" (or Instance) is the actual physical robot built from that blueprint. "Attributes" are its physical specs (color=red, battery=100%). "Methods" are the actions it can perform (walk, grab). "Inheritance" is making a specialized blueprint (Flying Robot) by copying the original blueprint and just adding wings.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. Constructors & <code>self</code></strong></p>
          <ul>
            <li><code>__init__(self)</code>: The constructor method. It is automatically called when an object is instantiated. Used to initialize the object's attributes.</li>
            <li><code>self</code>: The first parameter of <em>every</em> instance method in a class. It is a reference to the current object itself, used to access variables that belong to the class.</li>
          </ul>
          <p><strong>2. Inheritance</strong><br>
          Allows a child class to acquire properties (attributes and methods) from a parent class, promoting code reusability.</p>
          <ul>
            <li>Syntax: <code>class Child(Parent):</code></li>
            <li>Types: Single, Multiple (Python supports this: <code>class Child(P1, P2):</code>), Multilevel, Hierarchical, Hybrid.</li>
            <li><code>super()</code>: A built-in function that returns a proxy object allowing you to refer to the parent class. Used in the child's constructor to call the parent's constructor: <code>super().__init__(args)</code>.</li>
          </ul>
          <p><strong>3. Polymorphism & Method Overriding</strong></p>
          <ul>
            <li>Polymorphism means "many forms." It allows functions to use objects of different types at different times.</li>
            <li><strong>Method Overriding:</strong> If a child class provides a specific implementation of a method that is already provided by its parent class, it is called method overriding. The child's method will be executed instead of the parent's.</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Illustrate Inheritance and Method Overriding with a Python program.</p>
          <pre><code class="language-python"># Parent Class
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        
    def display_role(self):
        print(f"{self.name} is a generic Employee.")

# Child Class inheriting from Employee
class Manager(Employee):
    def __init__(self, name, salary, department):
        # Call Parent constructor using super()
        super().__init__(name, salary)
        self.department = department
        
    # Method Overriding: Redefining the parent's method
    def display_role(self):
        print(f"{self.name} manages the {self.department} department.")

# Execution
emp = Employee("John", 50000)
emp.display_role() # Output: John is a generic Employee.

mgr = Manager("Alice", 90000, "IT")
mgr.display_role() # Output: Alice manages the IT department.</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Define the core pillars. "Inheritance provides code reusability. Polymorphism allows the same method name to execute different behaviors based on the object."</li>
            <li><strong>Body:</strong> When demonstrating inheritance, ALWAYS use the <code>__init__</code> constructor in both parent and child, and explicitly show the use of <code>super().__init__()</code> to link them.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The <code>self</code> Trap:</strong> The most common syntax error in handwritten Python exams is forgetting to put <code>self</code> as the first argument in method definitions, or forgetting to use <code>self.variable_name</code> when accessing attributes.</li>
                <li><strong>Method Overloading:</strong> Be careful! Python does NOT natively support "Method Overloading" (having multiple methods with the same name but different parameters in the same class) like Java or C++. If asked about Polymorphism, always demonstrate "Method Overriding" (Child replacing Parent's method) instead.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Clearly label the Overridden method in your code comments for the examiner.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 5,
    title: "Module 5: Scientific Computing (Numpy, Pandas, Matplotlib)",
    topics: [
      {
        id: "m5t1",
        title: "Pandas CSV Analytics",
        badge: "HIGH",
        summary: "Analyze tabular data efficiently using Pandas DataFrames and CSV operations.",
        content: `
          <div class="module-intro">
            <p><strong>CST362 Programming in Python - Comprehensive Study Guide</strong></p>
            <p><em>Welcome to the final module. This module transitions you from basic programming to data science. It introduces three massive external libraries: <code>numpy</code> for matrix math, <code>matplotlib</code> for graphing, and <code>pandas</code> for data manipulation. According to our PYQ analysis, you face a distinct choice here: Odd (Q19) focuses heavily on Numpy matrix math, while Even (Q20) focuses entirely on Pandas CSV operations. We strongly recommend committing to the Even slot, as Pandas logic reads like simple English, whereas Numpy slicing can easily trap you in syntax errors during an exam.</em></p>
          </div>
          <hr>
          <h2>Topic 1: Pandas CSV Analytics</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ REPEATED IN EVERY PAPER]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Pandas is a library built on top of Numpy, designed specifically for data analysis. While Numpy is great for grids of numbers, Pandas is great for tabular data—like an Excel spreadsheet.</p>
          <blockquote>Imagine you have a massive Excel file with 10,000 employees. If your boss asks you to "Find all the employees in the HR department making over $50k and sort them by name", doing this line-by-line in pure Python using a <code>for</code> loop would be exhausting. Pandas allows you to treat the entire spreadsheet as a single object (a DataFrame) and ask it that question in just one line of code.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. Core Data Structures</strong></p>
          <ul>
            <li><code>Series</code>: A one-dimensional labeled array capable of holding any data type (essentially a single column in an Excel sheet).</li>
            <li><code>DataFrame</code>: A two-dimensional, size-mutable, tabular data structure with labeled axes (rows and columns). Think of it as a complete Excel table.</li>
          </ul>
          <p><strong>2. Essential Pandas Functions to Memorise:</strong></p>
          <ul>
            <li><code>import pandas as pd</code>: Standard import alias.</li>
            <li><strong>File I/O:</strong>
              <ul>
                <li><code>df = pd.read_csv("filename.csv")</code>: Loads a CSV into a DataFrame.</li>
                <li><code>df.to_csv("filename.csv")</code>: Saves a DataFrame back to a CSV.</li>
              </ul>
            </li>
            <li><strong>Viewing Data:</strong>
              <ul>
                <li><code>df.head(n)</code>: Returns the first <code>n</code> rows.</li>
                <li><code>df.tail(n)</code>: Returns the last <code>n</code> rows.</li>
              </ul>
            </li>
            <li><strong>Selecting & Filtering Data:</strong>
              <ul>
                <li><code>df['Column_Name']</code>: Selects a single column (returns a Series).</li>
                <li><code>df[ df['Age'] > 40 ]</code>: Filters the DataFrame, keeping only rows where Age > 40.</li>
              </ul>
            </li>
            <li><strong>Sorting:</strong>
              <ul>
                <li><code>df.sort_values(by='Column_Name')</code>: Sorts the DataFrame based on a specific column. (Add <code>ascending=False</code> for descending order).</li>
              </ul>
            </li>
            <li><strong>Missing Data (NaN):</strong>
              <ul>
                <li><code>df.fillna(value)</code>: Replaces missing (<code>NaN</code>) values with the specified value.</li>
              </ul>
            </li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Consider a CSV file <code>employee.csv</code> with columns: <code>name</code>, <code>gender</code>, <code>salary</code>, <code>institution</code>. Write pandas commands to:<br>
          1) Read the file.<br>
          2) Print all employee names in alphabetical order.<br>
          3) Print names of employees with the highest salary.</p>

          <pre><code class="language-python">import pandas as pd

# 1. Read the file
df = pd.read_csv("employee.csv")

# 2. Print all employee names in alphabetical order
# Extract the 'name' column, sort it, and print
sorted_names = df['name'].sort_values()
print("Alphabetical Names:\\n", sorted_names)

# 3. Print names of employees with the highest salary
# Find the maximum salary value
max_salary = df['salary'].max()

# Filter the dataframe to only include rows matching that max salary
highest_earners = df[df['salary'] == max_salary]

# Print just the 'name' column of those highest earners
print("Highest Earners:\\n", highest_earners['name'])</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Always start your answer with <code>import pandas as pd</code>.</li>
            <li><strong>Body:</strong> For filtering questions (e.g., "Find male employees"), you MUST write the syntax as <code>df[df['gender'] == 'Male']</code>. Do not write <code>if gender == 'Male'</code>—Pandas uses vectorized operations, not standard <code>for/if</code> loops.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The CSV Trap:</strong> Don't write your own custom Python file reader (<code>open()</code>, <code>readline()</code>) unless the question specifically bans Pandas (which it won't). <code>pd.read_csv()</code> does all the work for you.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> If asked to display the result, simply write <code>print(df)</code>.</li>
          </ul>
        `
      },
      {
        id: "m5t2",
        title: "Matplotlib Visualization",
        badge: "MED",
        summary: "Create professional-grade graphs and plots to visualize numerical data in Python.",
        content: `
          <h2>Topic 2: Matplotlib Visualization</h2>
          <p class="badge-info"><strong>[HIGH PROB | ↻ REPEATED IN Apr '25, May '24]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>Matplotlib is a 2D plotting library that produces publication-quality figures. It turns raw numerical data into visual graphs.</p>
          <blockquote>If Pandas is the accountant that organizes the data, Matplotlib is the artist that paints the picture. It takes lists of X and Y coordinates and connects the dots to build line graphs, scatter plots, or bar charts.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. The <code>pyplot</code> Module:</strong><br>
          Matplotlib relies heavily on its <code>pyplot</code> module, which provides a MATLAB-like interface.</p>
          <ul>
            <li><code>from matplotlib import pyplot as plt</code> (or <code>import matplotlib.pyplot as plt</code>).</li>
          </ul>
          <p><strong>2. Essential Plotting Commands:</strong></p>
          <ul>
            <li><code>plt.plot(x, y)</code>: Creates a line graph connecting the <code>x</code> and <code>y</code> coordinate arrays.</li>
            <li><code>plt.scatter(x, y)</code>: Creates a scatter plot (individual dots, no connecting lines).</li>
            <li><code>plt.bar(x, y)</code>: Creates a vertical bar chart.</li>
            <li><code>plt.pie(data)</code>: Creates a pie chart.</li>
          </ul>
          <p><strong>3. Enhancing the Plot:</strong></p>
          <ul>
            <li><code>plt.xlabel("text")</code> / <code>plt.ylabel("text")</code>: Labels the axes.</li>
            <li><code>plt.title("text")</code>: Adds a title to the top of the graph.</li>
            <li><code>plt.legend()</code>: Displays a legend (requires you to add <code>label='text'</code> inside the <code>plot()</code> command).</li>
            <li><code>plt.show()</code>: <strong>Crucial.</strong> This actually renders and opens the window displaying the plot.</li>
          </ul>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Create a Matplotlib plot with two lines representing <code>y=sin(x)</code> (solid line) and <code>y=cos(x)</code> (dashed line) for <code>0 &lt;= x &lt;= 2π</code>. Add legends, labels, and ticks.</p>

          <pre><code class="language-python">import matplotlib.pyplot as plt
import numpy as np
import math

# Step 1: Generate X axis data (0 to 2*pi with small steps)
x = np.arange(0, math.pi * 2, 0.05)

# Step 2: Generate Y axis data using numpy trig functions
y_sin = np.sin(x)
y_cos = np.cos(x)

# Step 3: Plot both lines. 
# '-' is solid (default), '--' is dashed. Add labels for the legend.
plt.plot(x, y_sin, '-', label='Sine Wave')
plt.plot(x, y_cos, '--', label='Cosine Wave')

# Step 4: Add customizations (Ticks, Labels, Legend)
plt.title("Trigonometric Functions")
plt.xlabel("X Axis (Radians)")
plt.ylabel("Y Axis (Amplitude)")

# Customizing ticks (optional unless specifically asked, but shows expertise)
plt.xticks([0, math.pi, 2*math.pi], ['0', 'π', '2π'])

plt.legend() # Displays the labels we defined in plt.plot()

# Step 5: Render the plot
plt.show()</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> Import <code>matplotlib.pyplot</code> and <code>numpy</code> (you almost always need numpy to generate the <code>x</code> data range easily).</li>
            <li><strong>Body:</strong> The examiner is checking for three specific things: 1) Did you generate <code>x</code> correctly using <code>np.arange</code> or <code>np.linspace</code>? 2) Did you use the <code>--</code> format string for the dashed line? 3) Did you include <code>plt.legend()</code> and <code>plt.show()</code>?</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Invisible Graph Trap:</strong> Forgetting <code>plt.show()</code>. Without it, the script calculates the graph in memory but immediately exits without drawing anything on the screen.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Draw a rough sketch of a sine and cosine wave crossing each other in your answer booklet. Visuals secure marks.</li>
          </ul>
        `
      },
      {
        id: "m5t3",
        title: "Numpy Array Math",
        badge: "HIGH",
        summary: "Perform high-performance numerical computations and matrix operations using NumPy arrays.",
        content: `
          <h2>Topic 3: Numpy Array Math</h2>
          <p class="badge-info"><strong>[SURE SHOT | ↻ GUARANTEED IN ODD SLOT]</strong></p>

          <h3>Section A: What is this? (The Concept)</h3>
          <p>NumPy (Numerical Python) is the core library for scientific computing in Python. It provides a high-performance multidimensional array object called <code>ndarray</code>.</p>
          <blockquote>Python's standard Lists are like a Swiss Army Knife—they can hold anything (numbers, strings, other lists), but they are relatively slow when doing heavy math. A Numpy Array is like a scalpel—it only holds one type of data (usually numbers), but it allows you to do massive matrix calculations instantly without writing <code>for</code> loops.</blockquote>

          <h3>Section B: Exam-Ready Theory (The Rigor)</h3>
          <p><strong>1. The <code>ndarray</code> Object Attributes:</strong></p>
          <ul>
            <li><code>ndarray.ndim</code>: Returns the number of dimensions (axes). (e.g., 1 for a line, 2 for a matrix).</li>
            <li><code>ndarray.shape</code>: Returns a tuple representing the size of each dimension (e.g., <code>(3, 4)</code> for a 3x4 matrix).</li>
            <li><code>ndarray.size</code>: Total number of elements.</li>
          </ul>
          <p><strong>2. Array Creation & Operations:</strong></p>
          <ul>
            <li><strong>Creation:</strong> <code>np.array([1, 2, 3])</code></li>
            <li><strong>Element-wise Math:</strong> If <code>A = [1, 2]</code> and <code>B = [3, 4]</code>, then <code>A + B</code> results in <code>[4, 6]</code>. (Unlike standard Python lists, where <code>A + B</code> would result in <code>[1, 2, 3, 4]</code>).</li>
            <li><strong>Hadamard Product (Element-wise multiplication):</strong> <code>A * B</code> results in <code>[3, 8]</code>.</li>
            <li><strong>Dot Product (Matrix Multiplication):</strong> <code>A.dot(B)</code>. The number of columns in A must equal the number of rows in B.</li>
            <li><strong>Transpose:</strong> <code>A.T</code> or <code>A.transpose()</code>.</li>
          </ul>
          <p><strong>3. Slicing Arrays:</strong><br>
          Numpy slicing works similarly to Python lists but extends to multiple dimensions: <code>array[row_start:row_end, col_start:col_end]</code>.</p>

          <h3>Section C: Step-by-Step Worked Example (The Application)</h3>
          <p><strong>Question:</strong> Write a program to create a 3x3 matrix <code>A</code> with random integers. Multiply each element by 2, and then calculate its transpose.</p>
          <pre><code class="language-python">import numpy as np

# Step 1: Create a 3x3 array of random integers between 0 and 10
# Note: np.random.randint(low, high, size=(rows, cols))
A = np.random.randint(0, 10, size=(3, 3))
print("Original Matrix A:\\n", A)

# Step 2: Multiply each element by a scalar (element-wise operation)
A_scaled = A * 2
print("\\nScaled Matrix (A * 2):\\n", A_scaled)

# Step 3: Calculate the transpose
A_transposed = A.T
print("\\nTransposed Matrix:\\n", A_transposed)</code></pre>

          <h3>Section D: How to Write This in the Exam (The Strategy)</h3>
          <ul>
            <li><strong>Start With:</strong> "NumPy arrays (<code>ndarray</code>) allow for vectorized mathematical operations, eliminating the need for explicit Python <code>for</code> loops when performing matrix math."</li>
            <li><strong>Body:</strong> Pay close attention to the question. Are they asking for Matrix Multiplication (Dot Product: <code>A.dot(B)</code>) or Element-wise Multiplication (<code>A * B</code>)? This is the most common mistake.</li>
            <li><strong>Traps:</strong>
              <ul>
                <li><strong>The Random Trap:</strong> The syntax for generating a random array is highly specific: <code>np.random.randint(low, high, size=(rows, cols))</code>. Do not mix this up with standard Python <code>random.randint()</code>.</li>
              </ul>
            </li>
            <li><strong>Close With:</strong> Write out a sample matrix (e.g., <code>[[1,2],[3,4]]</code>) to show you understand how rows and columns are structured visually.</li>
          </ul>
        `
      }
    ]
  }
];

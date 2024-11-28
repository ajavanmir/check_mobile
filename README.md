### Persian Contact Abbreviator

This repository provides a tool for processing and normalizing Persian contact lists, ensuring phone numbers follow a standardized format while maintaining associated names.

---

### **Features**
1. **Convert Persian/Arabic Numbers to English**  
   Converts numbers written in Persian or Arabic script into English digits for uniform processing.

2. **Abbreviate Contact List**  
   Reads contact lists in the format `Name - Phone` or `Phone - Name`, standardizes phone numbers, and removes duplicates.

3. **Phone Number Validation**  
   Checks whether a string is a valid Iranian mobile number, accounting for various formats including:
   - `09XXXXXXXXX`
   - `+98XXXXXXXXX`
   - `(98)XXXXXXXXX`, etc.

4. **Normalize Phone Numbers**  
   Ensures all valid phone numbers are converted into the standard format starting with `09`.

5. **Export Processed List**  
   Allows users to download the processed contact list as a `.txt` file.

---

### **Installation**
Clone the repository:
```bash
git clone https://github.com/amirjavanmir/persian-contact-abbreviator.git
cd persian-contact-abbreviator
```

---

### **Usage**

1. **Input Format**
   - Paste contacts into the input field in the format:  
     ```
     Name - Phone  
     Phone - Name  
     ```
     Example:
     ```
     علی - ۰۹۱۲۳۴۵۶۷۸۹
     +98-912-345-6789 - محمد
     ```

2. **Run the Tool**
   - The tool processes the list, converts Persian/Arabic numbers, normalizes phone numbers, and removes duplicates.

3. **Output**
   - The processed contact list will be displayed in the output field in the format:
     ```
     09123456789 - ali
     ```

4. **Download**
   - Click the **Download** button to save the processed list as `contacts.txt`.

---

### **Key Functions**

1. **convertPersianToEnglish(str)**  
   Converts Persian/Arabic digits in a string to English digits.

2. **abbreviateContacts()**  
   Processes the input field, normalizes phone numbers, and removes duplicates.

3. **isPhoneNumber(str)**  
   Validates if a string is a properly formatted Iranian mobile number.

4. **normalizePhone(str)**  
   Converts various Iranian phone formats into the standard format starting with `09`.

5. **downloadTextFile()**  
   Generates and downloads the processed contact list as a `.txt` file.

---

### **Demo**
You can test the tool by running `index.html` in your browser. Paste your contact list into the input field, and the tool will process and output the normalized list.

---

### **License**
This project is licensed under the MIT License.  
**Copyright Amir Javanmir**  
Released on: November 5, 2024

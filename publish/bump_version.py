import os
import sys


def main():
    if len(sys.argv) < 2:
        print("Version argument is missing.")
        sys.exit(1)

    version = sys.argv[1]

    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    version_file = os.path.join(root_dir, "VERSION")

    with open(version_file, "w", encoding="utf-8") as file:
        file.write(version + "\n")

    print(f"VERSION file updated to {version}")


if __name__ == "__main__":
    main()

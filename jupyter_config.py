from pathlib import Path

c.LabBuildApp.minimize = True
c.LabBuildApp.dev_build = False

c.StarterManager.extra_starters = {
    "whitepaper-single": {
        "type": "copy",
        "label": "Lesson 01",
        "description": "Start Here",
        "src": "notebooks/Lesson 01.ipynb",
        "icon": Path("docs/logo.svg").read_text()
    }
}
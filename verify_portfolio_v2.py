from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            page.wait_for_selector("#certificates", timeout=10000)

            # Screenshot Certificates
            element = page.locator("#certificates")
            element.screenshot(path="portfolio_certificates_v2.png")

            # Screenshot Hero
            page.evaluate("window.scrollTo(0, 0)")
            page.wait_for_timeout(1000)
            page.screenshot(path="portfolio_hero_v2.png")

            # Screenshot Skills
            page.locator("#skills").scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="portfolio_skills_v2.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()


import asyncio
from playwright.async_api import async_playwright

async def verify_final():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Set a large viewport to see full width responsiveness
        await page.set_viewport_size({"width": 1920, "height": 1080})

        try:
            print("Navigating to homepage...")
            await page.goto("http://localhost:3000", timeout=60000)
            await page.wait_for_load_state("networkidle")

            # 1. Hero
            print("Capturing Hero section...")
            await page.screenshot(path="final_1_hero.png")

            # 2. Skills (Scroll down)
            print("Capturing Skills section...")
            await page.locator("#skills").scroll_into_view_if_needed()
            await page.wait_for_timeout(2000) # Wait for animations
            await page.screenshot(path="final_2_skills.png")

            # 3. Certificates (Scroll down)
            print("Capturing Certificates section...")
            # Note: ID might be encryption or certificates
            try:
                await page.locator("#certificates").scroll_into_view_if_needed()
            except:
                print("Could not find #certificates, trying scrolling by pixels")
                await page.evaluate("window.scrollBy(0, 1000)")

            await page.wait_for_timeout(2000)
            await page.screenshot(path="final_3_certificates.png")

            # 4. Projects
            print("Capturing Projects section...")
            await page.locator("#projects").scroll_into_view_if_needed()
            await page.wait_for_timeout(2000)
            await page.screenshot(path="final_4_projects.png")

            # 5. Footer (Scroll to bottom)
            print("Capturing Footer...")
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(1000)
            await page.screenshot(path="final_5_footer.png")

            print("Verification complete. Check final_*.png files.")

        except Exception as e:
            print(f"Error during verification: {e}")
            await page.screenshot(path="final_error.png")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_final())

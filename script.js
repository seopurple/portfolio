document.addEventListener("DOMContentLoaded", function () {
    const activitiesBtn = document.getElementById("activities-btn");
    const activitiesList = document.getElementById("activities");
    const activityImages = document.querySelectorAll(".activity img");

    // 대외활동 버튼 클릭 시 보이게 하기
    activitiesBtn.addEventListener("click", function (event) {
        event.preventDefault();
        activitiesList.classList.toggle("hidden");
    });

    // 활동 클릭하면 상세 내용 보이기
    activityImages.forEach((img) => {
        img.addEventListener("click", function () {
            const detailSection = document.createElement("div");
            detailSection.classList.add("activity-detail");
            detailSection.innerHTML = 
                <div class="detail-content">
                    <h2>${this.alt} 상세 내역</h2>
                    <p>여기에 활동 상세 내용을 추가하면 돼!</p>
                    <button id="close-detail">닫기</button>
                </div>
            ;
            document.body.appendChild(detailSection);

            // 닫기 버튼 이벤트 추가
            document.getElementById("close-detail").addEventListener("click", function () {
                detailSection.remove();
            });
        });
    });
});
const filterButtons = document.querySelectorAll(".filter-buttons button");
const activities = document.querySelectorAll(".activity");

// 필터 버튼 클릭 이벤트
filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");

        activities.forEach((activity) => {
            if (filter === "all" || activity.getAttribute("data-category") === filter) {
                activity.style.display = "block";
            } else {
                activity.style.display = "none";
            }
        });
    });
});

activityImages.forEach(img => {
    img.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        const details = this.getAttribute('data-details').split(',');
        
        // Set the modal content
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalDetails.innerHTML = ''; // Clear previous details

        // Add the details with links to the modal
        details.forEach(detail => {
            const li = document.createElement('li');
            const [month, link] = detail.split('-');
            const a = document.createElement('a');
            a.href = link.trim();  // 링크 URL
            a.target = "_blank";  // 새 창에서 열리도록
            a.textContent = `${month.trim()} - 링크`;
            li.appendChild(a);
            modalDetails.appendChild(li);
        });

        // Show the modal
        modal.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const activityImages = document.querySelectorAll('.activity-img');
    const modal = document.getElementById('modal'); // 모달이 있다면 이 부분도 추가

    activityImages.forEach(img => {
        img.addEventListener('click', function() {
            const link = this.getAttribute('data-link'); // data-link 속성에서 URL을 가져옵니다
            if (link) {
                window.open(link, '_blank');  // 새 창에서 링크 열기
            } else {
                // 링크가 없으면 모달을 띄우는 코드
                const title = this.getAttribute('data-title');
                const description = this.getAttribute('data-description');
                const modalTitle = document.getElementById('modal-title');
                const modalDescription = document.getElementById('modal-description');
                
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modal.style.display = 'block'; // 모달 띄우기
            }
        });
    });

    // 모달 닫기 버튼
    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

activityImages.forEach(img => {
    img.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        const pdfLink = this.getAttribute('data-pdf');

        // 자기소개 및 PDF를 담은 새로운 작은 창 생성
        const detailSection = document.createElement("div");
        detailSection.classList.add("activity-detail");

        detailSection.innerHTML = `
            <div class="detail-content">
                <h2>${title}</h2>
                <p>${description}</p>
                <a href="${pdfLink}" target="_blank">이력서 다운로드</a>
                <button id="close-detail">닫기</button>
            </div>
        `;
        
        document.body.appendChild(detailSection);

        // 닫기 버튼 이벤트 추가
        document.getElementById("close-detail").addEventListener("click", function () {
            detailSection.remove();
        });
    });
});

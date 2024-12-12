document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    const ellipseWrapper = document.querySelector('.ellipse-wrapper');
    const notificationContainer = document.getElementById('notification-container');

    ellipseWrapper.addEventListener('click', function() {
        if (notificationContainer.style.display === 'none') {
            notificationContainer.style.display = 'block';
        } else {
            notificationContainer.style.display = 'none';
        }
    });

    const dashboardMenuItem = document.querySelector('#dashboard-nav');
    const leaveMenuItem = document.querySelector('#leave-nav');
    const dashboardSection = document.querySelector('.dashboard-section'); 
    const leaveRequestsSection = document.querySelector('.leave-section');

    dashboardMenuItem.addEventListener('click', function() {
        dashboardSection.style.display = 'block';
        leaveRequestsSection.style.display = 'none';
        dashboardMenuItem.classList.add('menu-item-wrapper');
        leaveMenuItem.classList.remove('menu-item-wrapper');
    });

    leaveMenuItem.addEventListener('click', function() {
        leaveRequestsSection.style.display = 'block';
        dashboardSection.style.display = 'none';
        dashboardMenuItem.classList.remove('menu-item-wrapper');
        leaveMenuItem.classList.add('menu-item-wrapper');
    });
});

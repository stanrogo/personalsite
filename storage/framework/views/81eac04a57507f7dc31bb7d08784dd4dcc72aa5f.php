<nav id="nav-bar">

    <div class="title-wrapper">
        <img class="logo" src="/icons/homescreen192.png">
        <a class="title">
            STANROGO
        </a>

        <button class="lnr lnr-menu hamburger js-toggleNav"></button>
    </div>

    <ul class="nav-links grid-container js-navLinks is-collapsed">

        <?php $__currentLoopData = Route::getRoutes(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $route_instance): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

            <?php if(strpos($route_instance->getName(), 'post') !== 0): ?>

                <li class="nav-link">
                    <a class="nav-link-inner <?php echo e(substr(Request::path(), 0, strlen($route_instance->uri())) === $route_instance->uri() ? 'is-active' : ''); ?>"
                       href="<?php echo e(route($route_instance->getName())); ?>">
                        <?php echo e($route_instance->getName()); ?>

                    </a>
                </li>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </ul>
</nav>